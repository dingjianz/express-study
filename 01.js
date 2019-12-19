let express = require('express')
let app = express()

app.get('/',(req,res) => {
  console.log(req.url)
  res.send('hello world')
})


app.get('/test',(req,res) => {
  console.log(req.url)
  res.send('test')
})

app.get('/test/:name',(req,res) => {
  console.log(req.params.name)
  res.send(req.params.name)
})
app.listen(3000)