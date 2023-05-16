
import express from 'express'
import exportar from './t010_parte2.js'

var app = express()

app.use(express.json())


app.get('/verdiretorio', exportar)


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

