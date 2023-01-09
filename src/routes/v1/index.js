const express = require('express')
const router = express.Router()

const { create,destroy,update,getCity, getAllCity,addAllCity } = require('../../controllers/city-controllers')
const AirportController = require('../../controllers/airport-controllers')
const FlightController  = require('../../controllers/flight-controllers')
router.post('/city',create)
router.post('/cityAll',addAllCity)
router.delete('/city/:id',destroy)
router.get('/city/:id',getCity)
router.get('/city',getAllCity)
router.patch('/city/:id',update)

router.post('/airports',AirportController.create)


router.post('/flights',FlightController.create)
router.get('/flights/:id',FlightController.getFlight)
router.get('/flights',FlightController.getAllFlight)

module.exports = router;