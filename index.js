const server = require('./src/server')
const mongoose = require('mongoose')
require('dotenv').config()




server.listen(8080, () =>{
    console.log('Sigue corriendo Siuuuurver')
})


