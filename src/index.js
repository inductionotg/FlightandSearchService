const express=require("express");

const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig');
const {City, Airport} = require("./models/index");
const db = require("./models/index")

const CityRepository = require('./repository/city-repository')

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
    })

}

setupAndStartServer()