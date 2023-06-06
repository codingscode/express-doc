
import express from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// http://localhost:3000/usuario/vicente
app.get('/usuario/:nome', (req, res, next) => {
   console.dir(req.params.nome)
   //console.log('oi')
   res.send('ok')
})



app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















