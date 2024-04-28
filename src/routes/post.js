const express = require('express')

const router = express.Router()

const {posts, updatePost, deletePost, getPost, getAllPost} = require('../controllers/postController')

router.post('/', posts)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.get('/:id', getPost)
router.get('/', getAllPost)


module.exports = router