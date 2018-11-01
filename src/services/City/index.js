
import connection, { Entities } from "../../DbConnection"
import { TravelStep, City } from "../../models";

function handleQueryRs(err, rs, res, rej) {
    if (err) {
        rej(err)
    }
    res(rs);
}
const CityServices = {

    getCity: function (id) {

        return new Promise((res, rej) => {
            let { cls } = Entities.city
            connection.query(`SELECT * FROM ${Entities.city.name} WHERE ${cls.id} = ${id}`, (err, rs) => {
                if (err) {
                    rej(err)
                } else {
                    if (rs.length > 0) {
                        let c = rs[0];
                        res(new City(
                            c[cls.id],
                            c[cls.nationID],
                            c[cls.cityNm]
                        ))
                    }else{
                        res(new City())
                    }
                }

            })

        })
    }
}


export default CityServices 