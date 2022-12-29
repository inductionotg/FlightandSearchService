const { CityRepository } = require('../repository/index')

const cityRepository = new CityRepository()
console.log(cityRepository)

class CityService{
    async createCity(data){
        try {
            const city = await cityRepository.createCity(data)
            return city
        } catch (error) {
            console.log("Error from service layer")
            throw {error}
        }
    }

    async destroyCity(cityId){
        try {
            const response = await cityRepository.destroyCity(cityId)
            return true;
        } catch (error) {
            console.log("Error from service layer")
            throw {error}  
        }
    }

    async updateCity(data,cityId){
        try {
            const city = await cityRepository.updateCity(data,cityId)
            return city
        } catch (error) {
            console.log("Error from service layer")
            throw {error} 
        }
    }

    async getCity(cityId){
        try {
            const city = await cityRepository.getCity(cityId)
            return city
        } catch (error) {
            console.log("Error from service layer")
            throw {error}
        }
    }
}
module.exports=CityService