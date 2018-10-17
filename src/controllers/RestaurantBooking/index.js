import { RestaurantBookingService } from "../../services"


const RestaurantBookingController = {
    createRestaurantBooking: async (req, res) => {
        const { body } = req;

        let { travelStepID, restaurantID, bookingTime } = body
        return await RestaurantBookingService.createRestaurantBooking({
            travelStepID, restaurantID, bookingTime
        })
    },
    getRestaurantBooking: async (req) => {
        return new Promise((res, rej) => {
            RestaurantBookingService.getRestauranBooking(req.query.travelStepID).then(rs => {
                res(rs)
            }).catch(err => {
                console.log(err)
                rej(err)
            })
        })
    }
}

export default RestaurantBookingController