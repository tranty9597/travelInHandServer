
import connection, { Entities } from "../../DbConnection"
import { Transpotation } from "../../models";
import ImageServices from '../Image'


const TranportationService = {
    /**
     * 
     * @param {*string} username
     * @returns {*array} all travel history of travelModel
     */
    getTransportation: (fromCityID, toCityID, locationID) => {
        let { cls } = Entities.transpotation
        return new Promise((res, rej) => {

            let whereClause = locationID ?`AND ${cls.travelLocationID} = '${locationID}'` 
                : `AND ${cls.fromCityID} = '${fromCityID}' AND ${cls.toCityID} = '${toCityID}'`

            connection.query(`SELECT * FROM ${Entities.transpotation.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                }

                res(rs.map(t => {
                    return new Transpotation(
                        t[cls.id],
                        t[cls.fromCityID],
                        t[cls.toCityID],
                        t[cls.toTravelLocationID],
                        t[cls.transpotationNm],
                        t[cls.phone],
                        t[cls.openTime],
                        t[cls.timeDistance], 
                        t[cls.price],
                        t[cls.description]
                    );
                }))
            });
        })
    },
    
    getTransportationById: (id) => {
        return new Promise((res, rej) => {
            let { cls } = Entities.transpotation
            let whereClause = `AND ${cls.id} = '${id}'`
            connection.query(`SELECT * FROM ${Entities.transpotation.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                }
                let t = rs[0]
                let transpotation = new Transpotation(
                        t[cls.id],
                        t[cls.fromCityID],
                        t[cls.toCityID],
                        t[cls.travelLocationID],
                        t[cls.transpotationNm],
                        t[cls.phone],
                        t[cls.openTime],
                        t[cls.timeDistance], 
                        t[cls.price],
                        t[cls.description])

                ImageServices.getImageByOwnerId(t[cls.id]).then(images =>{
                    res({...transpotation, images})
                })
            });
        })
    }
}


export default TranportationService