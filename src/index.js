const express=require("express");

const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig');

const db = require("./models/index")

const CityRepository = require('./repository/city-repository')
const AirplaneRepository = require('./repository/index')

const {City, Airport, Airplane} = require("./models/index");
const  FlightService  = require('./services/flight-services')


const ApiRoutes = require('./routes/index')
const setupAndStartServer = async () =>{
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, async()=>{
       
        console.log(`server started at ${PORT}`)
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true})
        }
        app.use('/api',ApiRoutes)
       /* await Airport.create({
            name:'rourkela International Airport',
            address:'Rourkela',
            cityId:28
        })*/

        /*await Airplane.create({
            modelNumber:'C295'
        })
        */
    })

}

setupAndStartServer()