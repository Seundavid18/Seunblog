const express = require('express')

const router = express.Router()

const {update, deleteUser, getUser} = require('../controllers/userController')

router.put('/:id', update)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)

module.exports = router;