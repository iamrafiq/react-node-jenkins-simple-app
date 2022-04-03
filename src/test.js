// pipeline{
//     agent any
//     tools {nodejs "node"}
//     stages {
//      stage('Build'){
//          steps {
//           git 'https://github.com/linuxrafiq/react-node-jenkins-simple-app.git'
//           sh 'npm install'
//          }
//      }
//     }
//     }