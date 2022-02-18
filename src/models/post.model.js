const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    abstract: {
        type: String,
        required: true         
    },
    autor: {
        type: String,
        required: true
    },
    contenidoPost: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: String,
        required: true
    },
    imagenPost: {
        type: String,
        required: true
    },
    tiempoLectura: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('posts', postSchema)