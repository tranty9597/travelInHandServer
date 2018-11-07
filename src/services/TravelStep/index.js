
import connection, { Entities } from "../../DbConnection"
import { TravelStep } from "../../models";
import CityServices from "../City";
import TranportationServices from "../Tranportation";
import HotelServices from "../Hotel";

function handleQueryRs(err, rs, res, rej) {
    if (err) {
        rej(err)
    }
    res(rs);
}
const TravelStepServices = {
    createTravelStep: (travelStepModel) => {
        let { cls } = Entities.travelStep
        return new Promise((res, rej) => {

            let queryInst = `INSERT INTO ${Entities.travelStep.name} (${cls.travelID}, ${cls.fromCityID}, ${cls.toCityID}, `
                + `${cls.tranpostationID}, ${cls.hotelID}, ${cls.restaurantBookingID},${cls.startDate},${cls.endDate})`
                + ` VALUES(${travelStepModel.travelID}, '${travelStepModel.fromCityID}', '${travelStepModel.toCityID}', `
                + ` '${travelStepModel.tranpostationID}', '${travelStepModel.hotelID}', ${travelStepModel.restaurantBookingID}, `
                + `'${travelStepModel.startDate}', '${travelStepModel.endDate}')`
            console.log("ddd", queryInst)
            connection.query(queryInst, (err, rs, fields) => handleQueryRs(err, rs, res, rej))
        })
    },
    /**
     * 
     * @param {*string} username
     * @returns {*array} all travel history of travelModel
     */
    getTravelSteps: (travelID) => {
        let { cls } = Entities.travelStep
        return new Promise((res, rej) => {
            let whereClause = travelID ? `AND ${cls.travelID} = ${travelID}` : ''

            connection.query(`SELECT * FROM ${Entities.travelStep.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {

                if (err) {
                    rej(err)
                }

                let result = rs.map(t => new Promise((resolve, reject) => {
                    let step = new TravelStep(
                        t[cls.id],
                        t[cls.travelID],
                        t[cls.fromCityID],
                        t[cls.toCityID],
                        t[cls.tranpostationID],
                        t[cls.hotelID],
                        t[cls.restaurantBookingID],
                        t[cls.startDate],
                        t[cls.endDate],
                        t[cls.status]
                    );

                    Promise.all([
                        CityServices.getCityByID(t[cls.fromCityID]),
                        CityServices.getCityByID(t[cls.toCityID])
                    ]).then(values => {
                        resolve({ ...step, fromCity: values[0].cityNm, toCity: values[1].cityNm })
                    })

                }))
                Promise.all(result).then(data => {
                    res(data)
                })
            })
        })
    },
    getStepDetail: (id) => {
        let { cls } = Entities.travelStep
        return new Promise((res, rej) => {
            let whereClause = `AND ${cls.id} = ${id}`
            connection.query(`SELECT * FROM ${Entities.travelStep.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {

                if (err) {
                    rej(err)
                }
                let t = rs[0]
                res(new Promise((resolve, reject) => {
                    let step = new TravelStep(
                        t[cls.id],
                        t[cls.travelID],
                        t[cls.fromCityID],
                        t[cls.toCityID],
                        t[cls.tranpostationID],
                        t[cls.hotelID],
                        t[cls.restaurantBookingID],
                        t[cls.startDate],
                        t[cls.endDate],
                        t[cls.status]
                    )

                    Promise.all([
                        CityServices.getCityByID(t[cls.fromCityID]),
                        CityServices.getCityByID(t[cls.toCityID]),
                        TranportationServices.getTransportationById(t[cls.tranpostationID]),
                        HotelServices.getHotelById(t[cls.hotelID])
                    ]).then(values => {
                        resolve({ ...step, fromCity: values[0], toCity: values[1], tranpostation: values[2], hotel: values[3] })
                    })

                }))
            })
        })
    }
}


export default TravelStepServices 