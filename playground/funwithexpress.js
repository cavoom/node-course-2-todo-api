const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log('Request: ',req.body);
  //console.log('Response: ',res);
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})