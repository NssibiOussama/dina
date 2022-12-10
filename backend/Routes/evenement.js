const connection = require('../util/database')
const express = require('express')
const router = express.Router()
const evenementController = require('../Controllers/evenementController')

router.get('/',evenementController.getEvents)
router.get('/:id',evenementController.getEventById)
router.put('/:id', evenementController.updateEvent)
router.post('/', evenementController.addEvent)
router.delete('/:id', evenementController.deleteEvent)

module.exports = router