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

const getFlight = async(req,res)=>{
    try {
        const flight = await flightService.getFlight(req.params.id)
        return res.status(200).json({
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

const getAllFlight = async(req,res)=>{
    try {
        const flight = await flightService.getAllFlight(req.query)
        return res.status(200).json({
            data:flight,
            err:{},
            success:true,
            message:"Successfully Fetched all the flight"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not fetched  flight",
            err:{error}
        })
    }
}

module.exports = {
    create,
    getFlight,
    getAllFlight
}