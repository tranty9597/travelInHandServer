
import connection, { Entities } from "../../DbConnection"
import { RestaurantBooking } from "../../models";

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
            console.log("ddd=========", queryInst)
            connection.query(queryInst, (err, rs) => handleQueryRs(err, rs, res, rej))
        })
    },
    /**
     * 
     * @param {*string} username
     * @returns {*array} all travel history of travelModel
     */
    getRestauranBooking: (travelStepID) => {
        let { cls } = Entities.restaurantBooking
        return new Promise((res, rej) => {
            let whereClause = travelStepID ? `AND ${cls.traveStepID} = ${travelStepID}` : ''

            connection.query(`SELECT * FROM ${Entities.restaurantBooking.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                }
                let booking = rs.map(t => {
                    return new RestaurantBooking(
                        t[cls.id],
                        t[cls.travelStepID],
                        t[cls.restaurantID],
                        t[cls.bookingTime])
                })

                res(booking)
            });
        })
    }
}


export default RestaurantBookingService