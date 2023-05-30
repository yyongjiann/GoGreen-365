import React from 'react'
import workflow from "./images/workflow.jpeg"

const GetStarted = () =>{

    return(
        <img 
            src = {workflow} 
            style={{
            position: 'absolute',
            top: '57%',
            left: '52%',
            transform: 'translate(-50%, -50%)',
            width: '75%',
            height: '80%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} />
    )


}

export default GetStarted