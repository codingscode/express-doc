
import express from 'express'

var app = express()
var admin = express()


app.use(express.json())


admin.get('/', (req, res) => {
   console.dir(admin.mountpath) // [ '/adm*n', '/manager' ]
   res.send('Admin Homepage')
})
  
var secret = express()

secret.get('/', (req, res) => {
  console.log(secret.mountpath) // /secr*t
  res.send('Admin Secret')
})
  
admin.use('/secr*t', secret) // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app  

app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

