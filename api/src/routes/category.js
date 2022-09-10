const express = require('express')

const router = express.Router()

const {category, getCategories} = require('../controllers/categoryController')

router.post('/cat', category)
router.get('/', getCategories)

module.exports = router