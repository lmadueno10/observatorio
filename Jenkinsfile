pipeline {
  agent {dockerfile true}
  tools {nodejs "nodejs" }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/lmadueno10/observatorio'
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