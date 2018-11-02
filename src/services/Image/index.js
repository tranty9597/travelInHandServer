
import connection, { Entities } from "../../DbConnection"
import { Image } from "../../models";

const ImageServices = {
    /**
     * 
     * @param {*string} username
     * @returns {*array} all travel history of travelModel
     */
    getImageByOwnerId: (ownerID) => {
        return new Promise((res, rej) => {
            let { cls } = Entities.image
            let whereClause = `AND ${cls.ownerID} = '${ownerID}'`

            connection.query(`SELECT * FROM ${Entities.image.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                }

                res(rs.map(t => t[cls.id]))
            });
        })
    },
    getImageById: (id) => {
        let { cls } = Entities.image
        return new Promise((res, rej) => {

            let whereClause = `AND ${cls.id} = ${id}`

            connection.query(`SELECT * FROM ${Entities.image.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
                if (err) {
                    rej(err)
                }
                let t = rs[0]
                res(
                    new Image(
                        t[cls.id],
                        t[cls.ownerID],
                        t[cls.data]
                    )
                )
            });
        })
    },
    uploadImage: (ownerID, data) => {
        let { cls } = Entities.image
        return new Promise((res, rej) => {
            let query = `INSERT INTO ${Entities.image.name} (${cls.ownerID}, ${cls.data})`
                + ` VALUES ('${ownerID}', ?)`
            connection.query(query, data, (err, rs) => {
                if (err) {
                    rej(err)
                }
                res(rs)
            });
        })
    }
}


export default ImageServices