pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
            post {
                success {
                    archiveArtifacts 'target/*.zip'
                }
            }
        }
        // stage('Test') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
        // stage('Deliver') {
        //     steps {
        //         sh './jenkins/scripts/deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //         sh './jenkins/scripts/kill.sh'
        //     }
        // }
        // stage('Package') {
        //     steps {
        //        archiveArtifacts artifacts: 'build/*.jar', fingerprint: true
        //     }
        // }
    }
}
