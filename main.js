const express = require('express')
const app = express()
const router = require('./routes/pages')
const port = 5000

app.use(router)

app.listen(port, ()=>console.log("Server started at "+port))