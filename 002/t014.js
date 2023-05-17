
import express from 'express'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/teste/:nome', (req, res) => {
   console.log('req.params.nome:')
   console.dir(req.params.nome)

   res.send('impressão')
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

