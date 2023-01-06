const { FlightService } = require('../services/index')

const flightService = new FlightService();

const create = async(req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body)
        return res.status(201).json({
            data:flight,
            err:{},
            success:true,
            message:"Successfully created the flight"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not created flight",
            err:{error}
        })
    }
}

module.exports = {
    create
}