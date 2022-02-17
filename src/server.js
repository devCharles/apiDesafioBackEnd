const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (request, response) =>{
    response.json({
        ok:true,
        message: 'Ya esta corriendo Siiiu'
    })
})
module.exports = app