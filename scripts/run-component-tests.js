#!/usr/bin/env node

/**
 * Script that simplifies the workflow of running unit tests for a component
 * using Bazel. Here are a few examples:
 *
 *   node ./scripts/run-component-tests all               | Runs tests for all components
 *   node ./scripts/run-component-tests button            | Runs button tests
 *   node ./scripts/run-component-tests src/angular/menu  | Runs menu tests
 *   node ./scripts/run-component-tests chip menu         | Runs chip and menu tests
 *
 * Supported command line flags:
 *
 *   --local    | If specified, no browser will be launched.
 *   --firefox  | Instead of Chrome being used for tests, Firefox will be used.
 *   --no-watch | Watch mode is enabled by default. This flag opts-out to standard Bazel.
 */

const minimist = require('minimist');
const shelljs = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const args = process.argv.slice(2);

// Path to the project directory.
const projectDir = path.join(__dirname, '../');

// Path to the directory that contains all packages.
const packagesDir = path.join(projectDir, 'src/');

// List of packages where the specified component could be defined in. The script uses the
// first package that contains the component (if no package is specified explicitly).
// e.g. "button" will become "angular/button".
const orderedGuessPackages = ['angular', 'angular-maps'].map((p) => `${p}`);

// ShellJS should exit if any command fails.
shelljs.set('-e');
shelljs.cd(projectDir);

// Extracts the supported command line options.
const {
  _: components,
  local,
  firefox,
  watch,
} = minimist(args, {
  boolean: ['local', 'firefox', 'watch'],
  default: { watch: true },
});

// Whether tests for all components should be run.
const all = components.length === 1 && components[0] === 'all';

// We can only run a single target with "--local". Running multiple targets within the
// same Karma server is not possible since each test target runs isolated from the others.
if (local && (components.length > 1 || all)) {
  console.error(
    chalk.red(
      'Unable to run multiple components tests in local mode. ' +
        'Only one component at a time can be run with "--local"'
    )
  );
  process.exit(1);
}

const browserName = firefox ? 'firefox' : 'chromium';
const bazelBinary = `yarn -s ${watch ? 'ibazel' : 'bazel'}`;

// If `all` has been specified as component, we run tests for all components
// in the repository. The `--firefox` flag can be still specified.
if (all) {
  // `ibazel` doesn't allow us to filter tests and build targets as it only allows
  // a subset of Bazel flags to be passed through. We temporarily always use `bazel`
  // instead of ibazel until https://github.com/bazelbuild/bazel-watcher/pull/382 lands.
  if (watch) {
    console.warn(chalk.yellow('Unable to run all component tests in watch mode.'));
    console.warn(chalk.yellow('Tests will be run in non-watch mode..'));
  }
  shelljs.exec(
    `yarn -s bazel test --test_tag_filters=-e2e,browser:${browserName} ` +
      `--build_tag_filters=browser:${browserName} --build_tests_only //src/...`
  );
  return;
}

// Exit if no component has been specified.
if (!components.length) {
  console.error(
    chalk.red(
      'No component specified. Please either specify individual components, or pass "all" ' +
        'in order to run tests for all components.'
    )
  );
  console.info(chalk.yellow('Below are a few examples of how the script can be run:'));
  console.info(chalk.yellow(` - yarn test all`));
  console.info(chalk.yellow(` - yarn test angular/button`));
  console.info(chalk.yellow(` - yarn test button contextmenu`));
  process.exit(1);
}

const bazelAction = local ? 'run' : 'test';
const testLabels = components.map(
  (t) => `${getBazelPackageOfComponentName(t)}:${getTargetName(t)}`
);

// Runs Bazel for the determined test labels.
shelljs.exec(`${bazelBinary} ${bazelAction} ${testLabels.join(' ')}`);

/**
 * Gets the Bazel package label for the specified component name. Throws if
 * the component could not be resolved to a Bazel package.
 */
function getBazelPackageOfComponentName(name) {
  // Before guessing any Bazel package, we test if the name contains the
  // package name already. If so, we just use that for Bazel package.
  const targetName =
    convertPathToBazelLabel(name) || convertPathToBazelLabel(path.join(packagesDir, name));
  if (targetName !== null) {
    return targetName;
  }
  // If the name does not contain an explicit package name, we try guessing the
  // package name by walking through an ordered list of possible packages and checking
  // if a package contains a component with the given name. The first match will be used.
  for (let guessPackage of orderedGuessPackages) {
    const guessTargetName = convertPathToBazelLabel(path.join(packagesDir, guessPackage, name));
    if (guessTargetName !== null) {
      return guessTargetName;
    }
  }
  console.error(
    chalk.red(
      `Could not find test target for specified component: ` +
        `${chalk.yellow(name)}. Looked in packages: ${orderedGuessPackages.join(', ')}`
    )
  );
  process.exit(1);
}

/** Converts a path to a Bazel label. */
function convertPathToBazelLabel(name) {
  if (shelljs.test('-d', name)) {
    return `//${convertPathToPosix(path.relative(projectDir, name))}`;
  }
  return null;
}

/** Converts an arbitrary path to a Posix path. */
function convertPathToPosix(pathName) {
  return pathName.replace(/\\/g, '/');
}

/** Gets the name of the target that should be run. */
function getTargetName(packageName) {
  // Schematics don't have _local and browser targets.
  if (packageName && packageName.endsWith('schematics')) {
    return 'unit_tests';
  }

  return `unit_tests_${local ? 'local' : browserName}`;
}
