//const {Airport} = require('../models/index')

const  CrudRepository  = require('./crud-repository')
const { Airport } = require('../models/index')
class AirportRepository extends CrudRepository{

    /*
    -Below approach is also correct but now I am using a base crud repository so that
    -repeatation of code will not happen
    - I am using inheritance here and calling base class using super
    - I can create my method and It will override the base class method
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
    */
    constructor(){
        super(Airport);
    }
}

module.exports=AirportRepository