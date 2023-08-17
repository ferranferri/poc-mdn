pipeline {
  agent any
  stages {
    stage ('verify K6') {
      steps {
        sh 'k6 version'
      }
    }
  }
}