
import express from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000/usuario/9
function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

const logStuff = [logOriginalUrl, logMethod]
app.get('/usuario/:id', logStuff, (req, res, next) => {
  res.send('User Info')
})

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















