
import express from 'express'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//http://localhost:3000/usuarios?sort=desc
app.get('/usuarios', (req, res) => {
   console.dir(req.path)
   console.dir(req.protocol)
   
   res.send('impressão')
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

