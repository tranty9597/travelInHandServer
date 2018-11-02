
import connection, { Entities } from "../../DbConnection"
import { City } from "../../models";
import ImageServices from "../Image";


const CityServices = {

    getCity: function (id) {

        return new Promise((res, rej) => {
            let { cls } = Entities.city
            connection.query(`SELECT * FROM ${Entities.city.name} WHERE ${cls.id} = '${id}'`, async (err, rs) => {
                if (err) {
                    rej(err)
                } else {
                    
                    let c = rs[0];
                    let city = new City(
                        c[cls.id],
                        c[cls.nationID],
                        c[cls.cityNm]
                    );
                    ImageServices.getImageByOwnerId(c[cls.id]).then(images =>{
                        res({ ...city, images})
                    })
                    

                }

            })

        })
    }
}


export default CityServices 