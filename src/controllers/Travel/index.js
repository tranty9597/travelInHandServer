import { TravelService } from "../../services"
import { BaseResult } from "../../models";

const TravelController = {
    createTravel: (req, res) => {
        const { body } = req;

        let { username, travelNm, travelDes, status } = body
        return new Promise((res, rej) =>{
            TravelService.createTravel({
                username,
                travelNm,
                travelDes,
                status,
                dateCreated: '2018-10-10'
            }).then(data =>{
                res(new BaseResult(200, "success", false, data))
            }).catch(err => {
                rej(err)
            })
        }) 
    },

    getTravels: (req) => {
        return new Promise((res, rej) => {
            TravelService.getTravels(req.query.username).then(rs => {
                res(new BaseResult(200, "Success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    }
}

export default TravelController 