const { Airplane }  = require('../models/index')

class AirplaneRepository{

    async getAirplane(airplaneId){
        console.log(airplaneId)
        try {
            const airplane = await Airplane.findByPk(airplaneId)
            console.log(airplane)
            return airplane
        } catch (error) {
            console.log("Error from Airplane Repo")
            throw {error}
        }
    }
}

module.exports = AirplaneRepository