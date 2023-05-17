
import express from 'express'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/teste/mais', (req, res) => {
  console.dir(req.fresh)
  console.dir(req.hostname)
  console.dir(req.ip)
  console.dir(req.originalUrl)

  res.send('impressão')
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

