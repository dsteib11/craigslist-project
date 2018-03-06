const express = require('express')

const serveStatic = require('serve-static')

const path = require('path')


// CREATE THE EXPRESS APP 

const app =  express()


// CREATE MIDDLEWARE TO HANDLE THE SERVING OF THE APP

app.use('/', serveStatic(path.join(__dirname, '/public')))
app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

// CREATE DEFAULT PORT TO SERVE THE APP 

const port = process.env.PORT || 5000

app.listen(port)

console.log('server started on port ' + port)