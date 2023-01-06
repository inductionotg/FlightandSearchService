const { AirportRepository } = require('../repository/index')

class AirportService{

    constructor(){
        this.AirportRepository = new AirportRepository();
    }

    async createAirport(data){
        try {
            const airport = this.AirportRepository.createAirport(data)
            return airport
        } catch (error) {
            console.log("Error from service layer")
            throw {error}
        }

    }
}

module.exports=AirportService