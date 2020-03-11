const express = require('express')
const controller = require('../controllers/position')
const router = express.Router()

router.get('/:id', controller.getCategoryId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router