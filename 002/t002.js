
import express from 'express'

var app = express()
var admin = express()


app.use(express.json())


admin.get('/', (req, res) => {
  console.log(admin.mountpath) // /admin
  res.send('Admin Homepage')
})

app.use('/admin', admin) // mount the sub app
  

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})
