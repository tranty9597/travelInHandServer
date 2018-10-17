import * as travelStepServices from "../services/travelStepServices"

export async function createTravelStep(req, res) {
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
    return await travelStepServices.createTravelStep({
        travelID,
        fromCityID,
        toCityID,
        tranpostationID,
        hotelID,
        restaurantBookingID,
        startDate,
        endDate
    })
}

export async function getTravelSteps(req) {
    return new Promise((res, rej) => {
        travelStepServices.getTravelSteps(req.query.travelID).then(rs => {
            res(rs)
        }).catch(err => {
            rej(err)
        })
    })
}
