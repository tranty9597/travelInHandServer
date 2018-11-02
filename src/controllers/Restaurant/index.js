import { RestaurantServices } from "../../services"
import { BaseResult } from "../../models";

const RestaurantController = {
    getRestaurantByCityOrLocation: (req) => {
        return new Promise((res, rej) => {
            RestaurantServices.getRestaurantByCityOrLocation(req.query.cityID, req.query.locationID).then(rs => {
                res(new BaseResult(200, "success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    },
}

export default RestaurantController