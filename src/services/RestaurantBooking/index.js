
import connection, { Entities } from "../../DbConnection"
import { RestaurantBooking } from "../../models";
import ImageServices from "../Image";
import { RestaurantServices } from "..";
function handleQueryRs(err, rs, res, rej) {
    if (err) {
        rej(err)
    }
    res(rs);
}
const RestaurantBookingService = {
    createRestaurantBooking: (booking) => {
        let { cls } = Entities.restaurantBooking
        return new Promise((res, rej) => {

            let queryInst = `INSERT INTO ${Entities.restaurantBooking.name} (${cls.travelStepID}, ${cls.restaurantID}, ${cls.bookingTime})`
                + ` VALUES(${booking.travelStepID}, '${booking.restaurantID}', '${booking.bookingTime}')`
            connection.query(queryInst, (err, rs) => handleQueryRs(err, rs, res, rej))
        })
    },
    /**
     * 
     * @param {*string} username
     * @returns {*array} all travel history of travelModel
     */
    getRestauranBooking: (travelStepID) => {
        return new Promise((res, rej) => {
            let { cls } = Entities.restaurantBooking
            let whereClause = travelStepID ? `AND ${cls.travelStepID} = ${travelStepID}` : ''

            connection.query(`SELECT * FROM ${Entities.restaurantBooking.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err);
                } else {
                    let bks = rs.map(t => new Promise((rsl, rj) => {
                        let booking = new RestaurantBooking(
                            t[cls.id],
                            t[cls.travelStepID],
                            t[cls.restaurantID],
                            t[cls.bookingTime]
                        )
                        Promise.all([
                            ImageServices.getImageByOwnerId(booking.restaurantID),
                            RestaurantServices.getRestaurantById(booking.restaurantID)
                        ]).then(va => {
                            rsl({ ...booking, restaurantNm: va[1].restaurantNm, imageID: va[0][0] || 1 })
                        })
                    }))

                    Promise.all(bks).then(val => res(val))
                }

            })
        })
    }
}


export default RestaurantBookingService