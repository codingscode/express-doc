
import express from 'express'

var app = express()

app.use(express.json())


app.get('/usuario/:id', (req, res) => {
   res.send('usuario -> ' + req.params.id)
})



app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

