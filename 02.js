let express = require('express')
let app = express()

app.use('/test',express.static('./public'))

app.get('/', (req,res) => {
  res.send('hello world')
})

app.listen(3000)