const crypto = require('crypto')
const {generatePkcePair, authorizationUrl, callback} = require("@opengovsg/sgid-client")
const apiRouter = require("express").Router()


apiRouter.get('/auth-url', (req, res) => {
  // Generate a session ID
  const sessionId = crypto.randomUUID()
  // Generate a PKCE pair
  const { codeChallenge, codeVerifier } = generatePkcePair()

  // Generate an authorization URL
  const { url, nonce } = authorizationUrl({
    // We pass the user's ice cream preference as the state,
    // so after they log in, we can display it together with the
    // other user info.
    codeChallenge,
    // Scopes that all sgID relying parties can access by default
    scope: ['openid', 'myinfo.name'],
  })
  
  // Store code verifier, state, and nonce
/*   sessionData[sessionId] = {
    state,
    nonce,
    codeVerifier
  } */
  
  // Return the authorization URL
  return res
    .cookie(SESSION_COOKIE_NAME, sessionId, SESSION_COOKIE_OPTIONS)
    .json({ url })
})



apiRouter.get('/redirect', async (req, res) => {
    // Retrieve the authorization code and session ID
    const authCode = String(req.query.code)
    const state = String(req.query.state)
    const sessionId = String(req.cookies[SESSION_COOKIE_NAME])
  
    // Retrieve the code verifier from memory
    const session = sessionData[sessionId]
    
    // Validate that the state matches what we passed to sgID for this session
    if (session?.state.toString() !== state) {
      res.redirect('/error')
      return
    }
    
    // Validate that the code verifier exists for this session
    if (!session?.codeVerifier) {
      res.redirect(`${frontendHost}/error`)
      return
    }
  
    // Exchange the authorization code and code verifier for the access token
    const { accessToken, sub } = await callback({
      code: authCode,
      nonce: session.nonce,
      codeVerifier: session.codeVerifier,
    })
    
    // Store the access token and sub in session
    session.accessToken = accessToken
    session.sub = sub
    sessionData[sessionId] = session
  
    // Successful login, redirect to logged in state
    res.redirect('/logged-in')
  })
  
  module.exports = apiRouter