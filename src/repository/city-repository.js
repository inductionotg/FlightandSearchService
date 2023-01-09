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
            /**
             * The belwo approach also works but will not return updated object 
             * if we are using Pg then returning:true can be used else not
             * const city = await City.update(data,{
             * where:{
             *      id:cityId
             *      }
             * })
             */
            console.log(data,cityId)
            const city = await City.findByPk(cityId)
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

    async addAll(data){
        console.log(data)
        try {
            const city = await City.bulkCreate(data)
            return city
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }
}

module.exports=CityRepository