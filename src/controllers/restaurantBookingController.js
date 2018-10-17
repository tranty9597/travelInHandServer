import * as restaurantBookingServices from "../services/restaurantBookingServices"

export async function createRestaurantBooking(req, res) {
    const { body } = req;

    let { travelStepID, restaurantID, bookingTime} = body
    return await restaurantBookingServices.createRestaurantBooking({
        travelStepID, restaurantID, bookingTime
    })
}

export async function getRestaurantBooking(req) {
    return new Promise((res, rej) => {
        restaurantBookingServices.getRestauranBooking(req.query.travelStepID).then(rs => {
            res(rs)
        }).catch(err => {
            console.log(err)
            rej(err)
        })
    })
}
