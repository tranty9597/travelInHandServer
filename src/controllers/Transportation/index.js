import { TranportationServices } from "../../services"
import { BaseResult } from "../../models";

const TrasportationController = {


    getTranportation: (req) => {
        let { fromCityID, toCityID, locationID } = req.query
        return new Promise((res, rej) => {
            TranportationServices.getTransportation(fromCityID, toCityID, locationID).then(rs => {
                res(new BaseResult(200, "success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    },
}

export default TrasportationController