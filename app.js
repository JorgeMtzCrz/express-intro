const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/about', (req, res)=>{
  console.log(req)
  res.send('About')
})

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/views/home-page.html')
})
app.get('/cat', (request, response, next) => {
  response.sendFile(__dirname + '/views/cat-page.html');
});

app.listen(3000, ()=>{
  console.log('Server on: localhost:3000')
})
