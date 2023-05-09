
import express from 'express'

var app = express()



app.use(express.json())

app.locals.title = 'My App'
app.locals.email = 'me@myapp.com'


app.get('/', (req, res) => {
  res.send('olá mundo')
})

console.dir(app.locals.title)

console.dir(app.locals.email)



app.listen(3000)


