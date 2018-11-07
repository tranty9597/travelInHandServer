
import connection, { Entities } from "../../DbConnection"
import { TravelStep, RestaurantBooking, HistoryStepDetail } from "../../models";
import CityServices from "../City";
import TranportationServices from "../Tranportation";
import HotelServices from "../Hotel";
import RestaurantBookingServices from "../RestaurantBooking";

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
                        let imageID;
                        if (values[1].images.length > 0) {
                            imageID = values[1].images[0]
                        } else {
                            imageID = 1
                        }
                        resolve({ ...step, fromCity: values[0].cityNm, toCity: values[1].cityNm, imageID })
                    })

                }))
                Promise.all(result).then(data => {
                    res(data)
                })
            })
        })
    },
    getStepDetail: (id) => {
        return new Promise((res, rej) => {

            let { cls } = Entities.travelStep;
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
                        HotelServices.getHotelById(t[cls.hotelID]),
                        RestaurantBookingServices.getRestauranBooking(step.travelID)
                    ]).then(values => {

                        resolve({
                            ...step,
                            fromCity: values[0],
                            toCity: values[1],
                            tranpostation: values[2],
                            hotel: values[3],
                            restaurantBooking: values[4]
                        })
                    }).catch(err => {
                        rej(err)
                    })

                }))
            })
        })
    },

    getHistoryStepDetail: (id) => {

        return new Promise((res, rej) => {

            let { cls } = Entities.historystepdetail;
            let whereClause = id ? `AND TRAVEL_ID = ${id}` : ''
            try {
                connection.query(`SELECT * FROM 
            (select ts.ID, ts.TRAVEL_ID, 
                (select CITY_NM from city where ID = ts.FROM_CITY_ID) as FROMCITYNM,
                (select CITY_NM from city where ID = ts.TO_CITY_ID) as TOCITYNM,
                tr.TRANSPOTATION_NM, ht.HOTEL_NM as HOTEMNM, rs.RESTAURANT_NM as RESTAURANTNM, ts.START_DATE, ts.END_DATE
                from travel_step ts
                left join city ct on ts.FROM_CITY_ID = ct.ID AND ts.TO_CITY_ID = ct.ID
                left join transpotation tr on ts.TRANPOSTATION_ID = tr.ID
                left join hotel ht on ts.HOTEL_ID = ht.ID
                left join restaurant_booking rb on ts.RESTAURANT_BOOKING_ID = rb.ID
                left join restaurant rs on rb.RESTAURANT_ID = rs.ID) HISTORYDETAIL
            WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                        if (err) {
                            rej(err)
                        }
                        let result = rs.map(t => new Promise((resolve, reject) => {
                            let historyStepDetail = new HistoryStepDetail(
                                t[cls.id],
                                t[cls.travel_id], t[cls.fromCityNm],
                                t[cls.toCityNm], t[cls.tranpostationNm],
                                t[cls.hotelNm], t[cls.restaurantNm],
                                t[cls.startDate], t[cls.endDate]
                            );
                            resolve({ ...historyStepDetail })
                        }))
                        Promise.all(result).then(data => {
                            res(data)
                        })
                    });
            } catch (err) {
                rej(err)
            }
        })
    }
}


export default TravelStepServices 