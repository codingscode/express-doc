
import express, { Router } from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var router = Router()


// http://localhost:3000/caminho
router.get('/caminho', (req, res) => {
   res.send('olá mundo')
})

app.use('/', router)

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















