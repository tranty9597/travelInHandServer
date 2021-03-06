import { TravelService } from "../../services"
import { BaseResult } from "../../models";

const TravelController = {
    createTravel: (req, res) => {
        const { body } = req;

        let { username, travelNm, travelDes, dateCreated } = body
        return new Promise((res, rej) =>{
            TravelService.createTravel({
                username,
                travelNm,
                travelDes,
                dateCreated
            }).then(data =>{
                res(new BaseResult(200, "success", false, data))
            }).catch(err => {
                rej(err)
            })
        }) 
    },
    changeStatus: (req) =>{
        return new Promise((res, rej) => {
            TravelService.changeStatus(req.query.ID, req.query.status).then(data => {
                res(new BaseResult(200, "Success", false, data))
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
    },
    getActiveTravel: (req) => {
        return new Promise((res, rej) => {
            TravelService.getActiveTravel(req.query.username).then(rs => {
                res(new BaseResult(200, "Success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    }
}

export default TravelController 