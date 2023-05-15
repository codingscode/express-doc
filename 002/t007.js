
import express from 'express'

var app = express()

app.use(express.json())

var blog = express()
var blogAdmin = express()

app.use('/blog', blog)
blog.use('/admin', blogAdmin)

console.dir(app.path()) // ''
console.dir(blog.path()) // '/blog'
console.dir(blogAdmin.path()) // '/blog/admin'


app.listen(3000, () => {
   console.log('servidor executando na porta 3000')
})

