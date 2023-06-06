
import express from 'express'



var app = express()

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// http://localhost:3000/
app.get('/', function (req, res) {
   console.log(res.get('Content-Type'))
   //res.json(null)
   //res.json({ user: 'tobi' })
   //res.status(500).json({ error: 'message' })
   res.send('ok')
})



app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})



















