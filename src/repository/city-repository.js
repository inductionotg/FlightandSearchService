const { City } = require('../models/index')
const { Op } = require("sequelize");
class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name})
            return city
            
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }

    async destroyCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            })
            return true
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }

    async updateCity(cityId,data){
        try {
            console.log(data,cityId)
            const city = await City.findByPk(cityId)
            console.log("dsdsd",city)
            //city.name = data.name
            await city.update({name:data.name})
            await city.save()
            return city
            
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }
    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId)
            console.log(city)
            return city
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }

    async getAllCity(filter){
        try {
            if(filter.name){
                const city = await City.findAll(
                    {
                    where:{
                        name:{
                            [Op.startsWith] :filter.name
                            
                        }
                    }
                   
                })
                return city
            }
            const city = await City.findAll();
            return city
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }
}

module.exports=CityRepository