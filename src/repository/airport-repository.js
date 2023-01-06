const {Airport} = require('../models/index')
console.log(Airport)

class AirportRepository{

    async createAirport(data){
        console.log(data)
        try {
            const airport = await Airport.create({name:data.name,address:data.address,cityId:data.cityId })
            return airport
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }
}

module.exports=AirportRepository