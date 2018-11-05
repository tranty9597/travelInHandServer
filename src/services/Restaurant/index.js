
import connection, { Entities } from "../../DbConnection"
import { Restaurant } from "../../models";
import ImageServices from '../Image'

const RestaurantServices = {
    getRestaurantByCityOrLocation: (cityID, locationID) => {
        return new Promise((res, rej) => {
            let { cls } = Entities.restaurant
            let whereClause = cityID ? `AND ${cls.cityID} = '${cityID}'` : ""
            whereClause += locationID ? `AND ${cls.travelLocationID} = '${locationID}'` : ''
            connection.query(`SELECT * FROM ${Entities.restaurant.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                } else {
                    res(rs.map(t => new Restaurant(
                        t[cls.id],
                        t[cls.cityID],
                        t[cls.restaurantNm],
                        t[cls.phone],
                        t[cls.travelLocationID]
                    )))
                }
            })
        })
    },
    getRestaurantById: function (id) {
        return new Promise((res, rej) => {
            let { cls } = Entities.restaurant
            let whereClause = id ? `AND ${cls.id} = '${id}'` : ""
            connection.query(`SELECT * FROM ${Entities.restaurant.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                } else {
                    let t = rs[0];
                    let restaurant = new Restaurant(
                        t[cls.id],
                        t[cls.cityID],
                        t[cls.restaurantNm],
                        t[cls.phone],
                        t[cls.travelLocationID]
                    )
                    ImageServices.getImageByOwnerId(t[cls.id]).then(images =>{
                        res({...restaurant, images})
                    })
                }
            })
        })
    }
}


export default RestaurantServices 