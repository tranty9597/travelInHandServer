import { TraveStepService } from "../../services"
import { BaseResult } from "../../models";

const TravelStepController = {
    createTravelStep: (req, res) => {
        const { body } = req;

        let {
            travelID,
            fromCityID,
            toCityID,
            tranpostationID,
            hotelID,
            restaurantBookingID,
            startDate,
            endDate } = body
        return new Promise((res, rej) => {
            TraveStepService.createTravelStep({
                travelID,
                fromCityID,
                toCityID,
                tranpostationID,
                hotelID,
                restaurantBookingID,
                startDate,
                endDate
            }).then(data => {
                res(new BaseResult(200, "Success", false, data))
            }).catch(err => {
                rej(err)
            })
        })

    },

    getTravelSteps: (req) => {
        return new Promise((res, rej) => {
            TraveStepService.getTravelSteps(req.query.travelID).then(rs => {
                res(new BaseResult(200, "success", false, rs))
            }).catch(err => {
                rej(err)
            })
        })
    },
    getStepDetail: (req) => {
        return new Promise((res, rej) => {
            TraveStepService.getStepDetail(req.query.id).then(data => {
                res(new BaseResult(200, "success", false, data))
            }).catch(err => {
                rej(err)
            })
        })
    },

    getHistoryStepDetail: (req) => {
        return new Promise((res, rej) => {
            TraveStepService.getHistoryStepDetail(req.query.id).then(data => {
                res(new BaseResult(200, "success", false, data))
            }).catch(err => {
                rej(err)
            })
        })
    }
}

export default TravelStepController