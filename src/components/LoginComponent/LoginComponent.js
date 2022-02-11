import React, { useEffect } from 'react'
import Sawo from 'sawo'

const LoginPage = () => {
    // useEffect(() => {
    //     var config = {
    //         // should be same as the id of the container created on 3rd step
    //         containerID: '0a3a8067-afa6-48e4-8763-1f03312a',
    //         // can be one of 'email' or 'phone_number_sms'
    //         identifierType: 'phone_number_sms',
    //         // Add the API key copied from 5th step
    //         apiKey: '98d1a101-f6a0-4554-8a13-a0756a6112b3',
    //         // Add a callback here to handle the payload sent by sdk
            
    //     }
    //     let sawo = new Sawo(config)
    //     sawo.showForm()
    // }, [])

    return (
        <div>
            <div id="sawo-container" style={{height:"300px", width:"400px"}}>hello</div>
        </div>
    )
}

export default LoginPage