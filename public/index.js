const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
  
})

app.post('/comment', (req, res) => {
    console.log(req.body)
    res.json(req.body)
  })

app.get('/wong', (req, res)=>{
  res.sendFile(path.join(__dirname,'./public', 'wong.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})