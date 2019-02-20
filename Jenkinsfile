#!groovy

String cron_string = BRANCH_NAME == 'develop' ? '@midnight' : ''

pipeline {
  agent { label 'nodejs' }
  triggers { cron(cron_string) }
  environment {
    scannerHome = tool 'SonarRunner';
    libraryVersion = """${sh(returnStdout: true, script: 'node -p "require(\'./package.json\').version"').trim()}"""
  }

  stages {
    stage('Installation') {
      steps {
        sh 'npm install'
      }
    }

    stage('Unit Tests') {
      steps {
        withCredentials([
          usernamePassword(credentialsId: 'browserstack',
            passwordVariable: 'BROWSERSTACK_ACCESS_KEY',
            usernameVariable: 'BROWSERSTACK_USERNAME')
        ]) {
          sh 'npm run build'
          sh 'npm test'
          sh 'npm run lint'
        }
        withSonarQubeEnv('Sonar NextGen') {
          sh 'npm run sonar'
        }
      }
    }

    stage('When on feature branch, create feature branch showcase release') {
      when {
        branch 'feature/*'
      }
      steps {
        sh "npm run sbb:publish -- $BRANCH_NAME"
      }
    }

    stage('When on develop, create develop showcase release') {
      when {
        branch 'develop'
      }
      steps {
        sh 'npm run sbb:publish -- develop'
      }
    }

    stage('When on master, we create a release') {
      when {
        branch 'master'
      }
      steps {
        sh 'npm run sbb:publish'
      }
    }

    stage('Deploy') {
      when {
        anyOf {
          branch 'feature/*'
          branch 'develop'
          branch 'master'
        }
      }
      steps {
        script {
          cloud_callDeploy(
            cluster: 'aws',
            project: 'sbb-angular-showcase',
            dc: 'sbb-angular',
            credentialId: '265c7ecd-dc0c-4b41-b8b1-53a2f55d8181',
            doNotFailOnRunningDeployment: true)
        }
      }
    }
  }
}

