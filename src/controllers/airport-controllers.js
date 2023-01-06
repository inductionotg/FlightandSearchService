const { AirportService } = require('../services/index')


const airportService = new AirportService()

const createAirport = async(req,res)=>{
    try {
        const airport = await airportService.createAirport(req.body)
        return res.status(201).json({
            sucess:true,
            data:airport,
            message:'successfully created the city',
            error:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            sucess:false,
            err:error,
            message:"Not able to create the city",
            date:{}
        })
    }
}
module.exports={
    createAirport
}