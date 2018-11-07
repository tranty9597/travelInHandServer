import { RestaurantBookingService } from "../../services"

import { BaseResult } from "../../models"

const RestaurantBookingController = {
    createRestaurantBooking: (req, res) => {
        const { body } = req;

        let { travelStepID, restaurantID, bookingTime } = body

        return new Promise((res, rej) => {
            RestaurantBookingService.createRestaurantBooking({
                travelStepID, restaurantID, bookingTime
            }).then(data => {
                res(new BaseResult(200, "success", false, data))
            }).catch(err => {
                rej(err)
            })
        })

    },
    getRestaurantBooking: async (req) => {
        return new Promise((res, rej) => {
            RestaurantBookingService.getRestauranBooking(req.query.travelStepID).then(rs => {
                console.log("ssss", rs)
                res(new BaseResult(200, "success", false, rs))
            }).catch(err => {
                console.log("ssss", err)
                rej(err)
            })
        })
    }
}

export default RestaurantBookingController