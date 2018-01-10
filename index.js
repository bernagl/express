const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')
const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there :DDD' })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile)
    }
  )
)

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

app.get('/auth/google/callback', passport.authenticate('google'))

// process.env.PORT get the port of the environment production
// doesnt work on local
const PORT = process.env.PORT || 5000
app.listen(PORT)
