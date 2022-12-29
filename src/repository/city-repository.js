const { City } = require('../models/index')

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

    async updateCity(data,cityId){
        try {
            const city = await City.findByPk(cityId)
            city.name = data.name
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
            return city
        } catch (error) {
            console.log("Error from repository Layer")
            throw {error}
        }
    }
}

module.exports=CityRepository