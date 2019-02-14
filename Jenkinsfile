pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Jenkins Dockit Build'
        sh '''ls
'''
        sh 'dockit'
      }
    }
    stage('Test') {
      steps {
        echo 'testing'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}