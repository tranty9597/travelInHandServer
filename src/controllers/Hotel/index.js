import { HotelServices } from "../../services"
import { BaseResult } from "../../models";

const HotelController = {


    getHotelByCityOrLocation: (req) => {
        return new Promise((res, rej) => {
            HotelServices.getHotelByCityOrLocation(req.query.cityID, req.query.locationID).then(rs => {
                res(new BaseResult(200, "success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    },
}

export default HotelController