const express = require('express')
const router = express.Router()

const { create,destroy,update,getCity, getAllCity,addAllCity } = require('../../controllers/city-controllers')

router.post('/city',create)
router.post('/cityAll',addAllCity)
router.delete('/city/:id',destroy)
router.get('/city/:id',getCity)
router.get('/city',getAllCity)
router.patch('/city/:id',update)


module.exports = router;