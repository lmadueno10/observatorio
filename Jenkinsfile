pipeline {
  agent any
  tools {NodeJS "node" }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/sanjeevkumarrao/node-hello-world'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}