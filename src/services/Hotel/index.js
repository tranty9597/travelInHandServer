
import connection, { Entities } from "../../DbConnection"
import { Hotel } from "../../models";

import ImageServices from '../Image'

const HotelServices = {
    getHotelByCityOrLocation: (cityID, locationID) => {
        return new Promise((res, rej) => {
            let { cls } = Entities.hotel
            let whereClause = cityID ? `AND ${cls.cityID} = ${cityID}` : ""
            whereClause += locationID ? `AND ${cls.travelLocationID} = ${locationID}` : ''
            connection.query(`SELECT * FROM ${Entities.hotel.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                } else {
                    res(rs.map(t => new Hotel(
                        t[cls.id],
                        t[cls.hotelNm],
                        t[cls.cityID],
                        t[cls.phone],
                        t[cls.travelLocationID]
                    )))
                }
            })
        })
    },
    getHotelById: function (id) {
        return new Promise((res, rej) => {
            let { cls } = Entities.hotel
            let whereClause = id ? `AND ${cls.id} = '${id}'` : ""
            connection.query(`SELECT * FROM ${Entities.hotel.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                } else {
                    let t = rs[0];
                    let hotel = new Hotel(
                        t[cls.id],
                        t[cls.hotelNm],
                        t[cls.cityID],
                        t[cls.phone],
                        t[cls.travelLocationID]
                    );
                    ImageServices.getImageByOwnerId(t[cls.id]).then(images =>{
                        res({...hotel, images})
                    })
                }
            })
        })
    }
}


export default HotelServices 