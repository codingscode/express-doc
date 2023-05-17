
import express from 'express'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/teste/*', (req, res) => {
   console.log('req.params[0]:')
   console.dir(req.params[0])
   
   res.send('impressão')
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

