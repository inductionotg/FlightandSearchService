const { AirplaneRepository, FlightRepository } = require('../repository/index')
const { compareTime } = require('../utils/helper')
console.log(compareTime)
class FlightService {

    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                console.log("kam kiya")
                throw {error:"Arrival Time cannot be less than departure Time"}
            }
            const airplaneCapacity = await this.AirplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.FlightRepository.createFlight(
                {...data,totalSeats:airplaneCapacity.capacity})
            return flight
        } catch (error) {
            console.log("Error from Flight service")
            throw {error}
        }
        
    }
}
module.exports = FlightService

/**
 * {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime
 * departureTime,
 * price,
 * totalSeats -> airplane
 * }
 */