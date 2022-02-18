const Post = require('../models/post.model')
const createError = require('http-errors')


function getAllPost() {
    return Post.find()
}

function getByIdPost(id) {
    return Post.findById(id)
}

function createPost(postData){
    const newPost = new Post(postData)
    const errors = newPost.validateSync();
    if(errors) {
        throw new createError(400, 'Validation failed')
    }
    return newPost.save()
}

function deleteByIdPost(id){
    return Post.findByIdAndDelete(id)
}

function updateByIdPost(id, newPostData){
    return Post.findByIdAndUpdate(id, newPostData)
}

module.exports = {
    getAllPost,
    getByIdPost,
    createPost,
    deleteByIdPost,
    updateByIdPost
}