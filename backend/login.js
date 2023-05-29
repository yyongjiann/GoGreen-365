const {SgidClient} = require('@opengovsg/sgid-client')
const cors = require("cors")
// const cookieParser = require('cookie-parser')
//const open =  require('open')
const apiRouter = require("./controller/auth")
require('dotenv').config()
const express = require('express')
const app = express() 
app.use(cors())

const PORT = 5001

// Initialize the sgID SDK here
const sgidClient = new SgidClient({
clientId: String(process.env.SGID_CLIENT_ID),
clientSecret: String(process.env.SGID_CLIENT_SECRET),
privateKey: String(process.env.SGID_PRIVATE_KEY),
redirectUri: String(process.env.SGID_REDIRECT_URI)
})



const initServer = async () => {
try {
    // app.use(cookieParser())
    app.use('/api', apiRouter)

    app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    //void open(`http://localhost:${PORT}`)
    })
} catch (error) {
    console.error(
    'Something went wrong while starting the server. Please restart the server.',
    )
    console.error(error)
}
}

initServer()


