
import connection, { Entities } from "../../DbConnection"
import { City } from "../../models";
import ImageServices from "../Image";


const CityServices = {

    getCityByID: function (id) {

        return new Promise((res, rej) => {
            let { cls } = Entities.city
            let whereClause = id ? `AND ${cls.id} = '${id}'` : ''
            connection.query(`SELECT * FROM ${Entities.city.name} WHERE 1 = 1 ${whereClause} `, async (err, rs) => {
                if (err) {
                    rej(err)
                } else {

                    let c = rs[0];
                    let city = new City(
                        c[cls.id],
                        c[cls.nationID],
                        c[cls.cityNm]
                    );
                    ImageServices.getImageByOwnerId(c[cls.id]).then(images => {
                        res({ ...city, images })
                    })


                }

            })

        })
    },
    getCity: function (id = 1) {

        return new Promise((res, rej) => {
            let { cls } = Entities.city
            let whereClause = `AND ${cls.nationID} = '${id}'`
            connection.query(`SELECT * FROM ${Entities.city.name} WHERE 1 = 1 ${whereClause} `, async (err, rs) => {
                if (err) {
                    rej(err)
                } else {
                    Promise.all(rs.map(c => new Promise((rsl, rj) => {
                        let city = new City(
                            c[cls.id],
                            c[cls.nationID],
                            c[cls.cityNm]
                        );
                        ImageServices.getImageByOwnerId(c[cls.id]).then(images => {
                            rsl({ ...city, images })
                        })
                    }))).then(val => res(val))

                }

            })

        })
    }
}


export default CityServices 