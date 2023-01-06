const { AirplaneRepository, FlightRepository } = require('../repository/index')

class FlightService {

    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new FlightRepository();
    }
    async createFlight(data){
        console.log(data)
        try {
            const airplaneCapacity = await this.AirplaneRepository.getAirplane(data.airplaneId)
            console.log("capacity",airplaneCapacity)
            const flight = await this.FlightRepository.createFlight(
                {...data,totalSeats:airplaneCapacity.capacity}
            )
            console.log("from flightt ",flight)
            return flight
        } catch (error) {
            
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