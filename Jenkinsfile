pipeline
{
    agent any
    
    environment{
        dockerImage=''
        registery='minalabib07/front_image'
        registerycredentials='docker_hub_cred'
    }
    
    stages{
    
        stage('build Docker image'){
            steps{
                script{
                    dockerImage= docker.build registery
                }
            }
        }
        
        stage('uploading image'){
            steps{
                script{
                    docker.withRegistry( '', registerycredentials ) {
                    dockerImage.push()
                    }
                }
            }
        }
    }
}

