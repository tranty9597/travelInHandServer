import { CityServices } from "../../services"
import { BaseResult } from "../../models";

const CityController = {


    getCity: (req) => {
        return new Promise((res, rej) => {
            CityServices.getCity().then(rs => {
                res(new BaseResult(200, "success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    },
    getCityByID: (req) => {
        return new Promise((res, rej) => {
            CityServices.getCityByID(req.query.id).then(rs => {
                res(new BaseResult(200, "success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    },
}

export default CityController