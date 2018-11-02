
import connection, { Entities } from "../../DbConnection"
import { Transpotation } from "../../models";

function handleQueryRs(err, rs, res, rej) {
    if (err) {
        rej(err)
    }
    res(rs);
}
const TranportationService = {
    /**
     * 
     * @param {*string} username
     * @returns {*array} all travel history of travelModel
     */
    getTransportation: (fromCityID, toCityID) => {
        let { cls } = Entities.transpotation
        return new Promise((res, rej) => {

            let whereClause = `AND ${cls.fromCityID} = ${fromCityID} AND ${cls.toCityID} = ${toCityID}`

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
                        t[cls.timeDistance]
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
                res(
                    new Transpotation(
                        t[cls.id],
                        t[cls.fromCityID],
                        t[cls.toCityID],
                        t[cls.travelLocationID],
                        t[cls.transpotationNm],
                        t[cls.phone],
                        t[cls.openTime],
                        t[cls.timeDistance]
                    )
                )
            });
        })
    }
}


export default TranportationService