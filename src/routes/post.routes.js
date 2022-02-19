const posts = require('../usecases/post.usecase')
const express = require('express')
const createError = require('http-errors')
const auth = require('../middlewares/auth.middleware')

const router = express.Router()



//Endpoit Get Post
router.get('/', async (request, response) => {
    try {
        const allPosts = await posts.getAllPost()
        response.json({
            ok: true,
            posts: allPosts
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok: false,
            error
        })
    }
})


//Endpoint Get by ID Post
router.get('/:id', async (request, response) => {
    try {
        const postFound = await posts.getByIdPost(request.params.id)
        if (!postFound)
            throw new createError(404, 'Post not found')
        response.json({ 
            ok: true, 
            post: postFound
        })  
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            error
        })
    }
})

//Endpoint Create
router.post('/',auth, async (request, response) => {
    try {
        const postCreate = await posts.createPost(request.body)
        response.json({
            ok: true,
            message: 'Post create',
            post: postCreate
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            error
        })
    }  
})

//Endpoint Update
router.patch('/:id',auth, async (request, response) => {
    try {
        const postUpdate = await posts.updateByIdPost(request.params.id, request.body)
        response.json({
            ok: true,
            message: 'Post updated',
            post: postUpdate
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok:false,
            error
        })
    }
})


//EndPoint Delete udated
router.delete('/:id',auth, async (request, response) => {
    try {
        const postDelete = await posts.deleteByIdPost(request.params.id)
        if (!postDelete){
            response.status(404)
            response.json({
                ok: false,
                message: 'Post not found'
            })
        }
        response.json({
            ok: true,
            message: 'Post deleted'
        })
    } catch (error) {
        response.status(400)
        response.json({
            ok:false,
            error
        })
    }
})

module.exports = router