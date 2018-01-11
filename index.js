const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
require('./models/User')
require('./services/passport')

const app = express()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())
mongoose.connect(keys.mongoURI)
require('./routes/authRoutes')(app)

app.get('/', (req, res) => {
  res.send({ hi: 'there :DDD' })
})

// process.env.PORT get the port of the environment production
// doesnt work on local
const PORT = process.env.PORT || 5000
app.listen(PORT)
