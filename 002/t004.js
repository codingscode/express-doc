
import express from 'express'

var app = express()

app.use(express.json())

var admin = express()

admin.on('mount', (parent) => {
  console.log('Admin Mounted')
  console.log(parent) // refers to the parent app
})

admin.get('/', (req, res) => {
  res.send('Admin Homepage')
})

app.use('/admin', admin)


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

