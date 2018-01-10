const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'thereeee' })
})

// process.env.PORT get the port of the environment production
// doesnt work on local
const PORT = process.env.PORT || 5000
app.listen(PORT)
