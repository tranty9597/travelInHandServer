import { TraveStepService } from "../../services"

const TravelStepController = {
    createTravelStep: async (req, res) => {
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
        return await TraveStepService.createTravelStep({
            travelID,
            fromCityID,
            toCityID,
            tranpostationID,
            hotelID,
            restaurantBookingID,
            startDate,
            endDate
        })
    },
    
    getTravelSteps: async (req) => {
        return new Promise((res, rej) => {
            TraveStepService.getTravelSteps(req.query.travelID).then(rs => {
                res(rs)
            }).catch(err => {
                rej(err)
            })
        })
    }
}

export default TravelStepController