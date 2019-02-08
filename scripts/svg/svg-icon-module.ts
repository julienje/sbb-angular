import { readFile } from 'fs';
import { basename, dirname, relative, sep } from 'path';
import { promisify } from 'util';
import { IconModule } from './icon-module';
import { svgoConf } from './svgo-configuration';

const readFileAsync = promisify(readFile);

class SvgAttribute {
  private _value: string;

  constructor(
    private readonly _name: string,
    private readonly _regex: RegExp,
    private readonly _fallback: RegExp = /^$/g,
  ) { }

  attributeBinding() {
    return `[attr.${this._name}]="${this._name}"`;
  }

  removeAttribute(content: string) {
    return content.replace(this._regex, '');
  }

  resolveValue(content: string) {
    const value = this._regex.exec(content) || this._fallback.exec(content);
    if (value) {
      this._value = value[1];
    }
    return this;
  }

  hasValue() {
    return !!this._value;
  }

  toParameter() {
    return `${this._name}: '${this._value}'`;
  }
}

export class SvgIconModule extends IconModule {
  readonly filePath: any;
  readonly selector: string;
  readonly componentName: string;
  private _attributeReplacements = [
    new SvgAttribute('viewBox', / viewBox="([ \d,]+)"/g),
    new SvgAttribute('preserveAspectRatio', / preserveAspectRatio="([^"]+)"/g),
    new SvgAttribute('width', / width="([^"]+)"/g, / viewBox="\d+[ ,]+\d+[ ,]+(\d+)[ ,]+\d+"/g),
    new SvgAttribute('height', / height="([^"]+)"/g, / viewBox="\d+[ ,]+\d+[ ,]+\d+[ ,]+(\d+)"/g),
  ];

  constructor(basePath, filePath) {
    super(
      dirname(relative(basePath, filePath))
        .split(sep),
      basename(filePath)
        .replace(/\.svg$/i, '')
        .replace(/SBB_(XX_)?(GC_)?(\d+_)?(\d+_)?/i, '')
        .replace(/\_/g, '-')
        .replace(/([A-Z])/g, (_, m) => `-${m.toLowerCase()}`)
        .replace(/^[\w\W]+$/g, m => `icon-${m}`));
    this.filePath = filePath;
    this.selector = `sbb-${this.kebabCaseName}`;
    this.componentName = `${this.pascalCaseName}Component`;
    this.importPath = `./${this.outputFileBaseName}`;
  }

  iconComponentDetails(): { selector: string, name: string, modules: string[] }[] {
    return [{
      selector: this.selector,
      name: this.componentName,
      modules: [this.moduleName],
    }];
  }

  protected async _angularTemplate() {
    const { angularSvgTemplate, attributes } = await this._prepareTemplate();
    return `/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '${this.modules.map(m => '..').join('/')}/icon-base';

@Component({
  selector: '${this.selector}',
  // tslint:disable-next-line:max-line-length
  template: \`${angularSvgTemplate}\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ${this.componentName} extends IconBase {
  constructor() {
    super({ ${attributes} });
  }
}

@NgModule({
  declarations: [${this.componentName}],
  exports: [${this.componentName}],
})
export class ${this.moduleName} { }
`;
  }

  private async _prepareTemplate() {
    const svgContent = await readFileAsync(this.filePath, 'utf8');
    const optimizedSVG = await this._normaliseSvg(svgContent);
    const attributes = this._attributeReplacements
      .map(a => a.resolveValue(optimizedSVG.data))
      .filter(a => a.hasValue())
      .map(a => a.toParameter())
      .join(' ');
    const bindings = this._attributeReplacements
      .map(a => a.attributeBinding())
      .join(' ');
    const angularSvgTemplate = this._attributeReplacements
      .reduce((current, next) => next.removeAttribute(current), optimizedSVG.data)
      .replace(/^<svg/g, `<svg [attr.class]="'sbb-svg-icon ' + svgClass" ${bindings}`);
    return { angularSvgTemplate, attributes };
  }

  /**
   * Normalizes SVG mark-up, optimizing the content for cross-browser compatibility.
   * [svgo](https://github.com/svg/svgo) library is used for the scope with configured options findable in svgo-configuration.ts
   * @param svgIconSource Source SVG mark-up
   * @return normalized SVG mark-up
   **/
  private async _normaliseSvg(svgIconSource) {
    return await svgoConf.optimize(svgIconSource);
  }
}
