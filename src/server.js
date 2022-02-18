const express = require('express')
const app = express()
const errorHandler = require('./middlewares/errorHandler.middleware')
const logger = require('./middlewares/logger.middleware')
const userRouter = require('./routes/user.routes')

app.use(express.json())
app.use(errorHandler)
app.use(logger)
app.use('/users',userRouter)


app.get('/', (request, response) =>{
    response.json({
        ok:true,
        message: 'Ya esta corriendo Siiiu'
    })
})
module.exports = app