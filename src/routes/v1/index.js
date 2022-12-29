const express = require('express')
const router = express.Router()

const { create,destroy,update,getCity } = require('../../controllers/city-controllers')

router.post('/city',create)
router.delete('/city/:id',destroy)
router.get('/city/:id',getCity)
router.patch('/city/:id',update)


module.exports = router;