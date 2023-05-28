
import express from 'express'


var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// http://localhost:3000/?name=tobi
app.get('/', (req, res) => {
   console.log(req.params)
   console.log(req.query)
   res.send('GET')
})


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

