const { Flight } = require('../models/index')
const { Op } = require('sequelize')
class FlightRepository {

    /**
     * Why createFilter in repository?
     * Because I am still using database  const --{ Op } = require('sequelize') 
     * I can do in service section also but i am using sequelize operator , so thats why using in repository section
     */
    #createFilter(data){
        let filter = {}
        //console.log("...",filter)
        
        if(data.arrivalAirportId){
            console.log("I have arrival")
            filter.arrivalAirportId = data.arrivalAirportId
        }

        if(data.departureAirportId){
            console.log("I have departure")
            filter.departureAirportId = data.departureAirportId
        }
        /*
        if(data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [Op.and]:[
                    {price:{[Op.lte]:data.maxPrice}},
                    {price:{[Op.gte]:data.minPrice}}
                ]
            })
        }

        Why not using above if stmt because it is adding extra nested filter so that's why we are using PriceFilter array
        */
        let pricefilter=[]
        if(data.minPrice){
            console.log("I have minprice")
            pricefilter.push({price:{[Op.gte]:data.minPrice}})
        }
        if(data.maxPrice){
            console.log("I have maxprice")
            pricefilter.push({price:{[Op.lte]:data.maxPrice}})
        }
        /*
        if(data.minPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}})
        }

        if(data.maxPrice){
            Object.assign(filter,{price:{[Op.lte]:data.minPrice}})
        }
        */
        Object.assign(filter,{[Op.and]:pricefilter})
        console.log("filter obj",pricefilter,filter)
        console.log("filter",filter)
        return filter

    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data)
            return flight;
        } catch (error) {
            console.log("Error from Flight Repository Layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId)
            return flight
        } catch (error) {
            console.log("Error from Flight Repository Layer");
            throw {error};
        }
    }

    async getAllFlight(filter){
        try {
            const filterObject = await this.#createFilter(filter)
            const flight = await Flight.findAll({
                where:filterObject
            })
            return flight
        } catch (error) {
            console.log("Error from Flight Repository Layer");
            throw {error};
        }
    }

}
module.exports = FlightRepository