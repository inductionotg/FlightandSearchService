const { Flight } = require('../models/index')

class FlightRepository {

    async createFlight(data){
        console.log("data fromrepo",data)
        try {
            const flight = await Flight.create(data)
            return flight;
        } catch (error) {
            console.log("Error from Flight Repository Layer");
            throw {error};
        }
    }

}
module.exports = FlightRepository