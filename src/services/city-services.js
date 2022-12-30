const { CityRepository } = require('../repository/index')
/*
* This way is also correct and in this way we dont need to use the constructor
const cityRepository = new CityRepository()
console.log("services",cityRepository)
*/
class CityService{
    /**
     * This way is also correct, we can use the constructor
     */
    constructor(){
        this.cityRepository = new CityRepository();
    }
    
    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data)
            return city
        } catch (error) {
            console.log("Error from service layer")
            throw {error}
        }
    }

    async destroyCity(cityId){
        try {
            const response = await this.cityRepository.destroyCity(cityId)
            return response;
        } catch (error) {
            console.log("Error from service layer")
            throw {error}  
        }
    }

    async updateCity(data,cityId){
        try {
            const city = await this.cityRepository.updateCity(data,cityId)
            return city
        } catch (error) {
            console.log("Error from service layer")
            throw {error} 
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId)
            return city
        } catch (error) {
            console.log("Error from service layer")
            throw {error}
        }
    }

    async getAllCity(filter){
        try {
            const city = await this.cityRepository.getAllCity({name:filter.name})
            return city
        } catch (error) {
            console.log("Error from service layer")
            throw {error}
            
        }
    }
}
module.exports=CityService