pipeline {
  environment {
    VERCEL_PROJECT_NAME = 'simple-nodejs'
    VERCEL_TOKEN = credentials('devops14-vercel-token') // ดึงจาก Jenkins
  }
  
  agent {
    docker {
      image 'node:20-alpine'
      args '-u root:root'
    }
  }
  stages {
    stage('Test npm') {
      steps {
        // container('my-builder') {
          sh 'npm --version'
          sh 'node --version'
        // }
      }
    }
    stage('Build') {
      steps {
        // container('my-builder') {
          sh 'npm ci'
          sh 'npm run build'
        // }
      }
    }
    stage('Test Build') {
      steps {
        // container('my-builder') {
          sh 'npm run test'
        // }

      }
    }

    stage('Deploy') {
      steps {
      withCredentials([string(credentialsId: 'devops14-vercel-token', variable: 'VERCEL_TOKEN')]) {
      sh 'npm install -g vercel@latest'
      sh '''
        vercel whoami --token "$VERCEL_TOKEN"
        vercel link --project simple-nodejs --token "$VERCEL_TOKEN" --yes
        vercel --token "$VERCEL_TOKEN" --prod --confirm
      '''
        }
      }
    }

  }
}




