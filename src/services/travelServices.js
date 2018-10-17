
import connection, { Entities } from "../DbConnection"
import { Travel } from "../models";

function handleQueryRs(err, rs, res, rej) {
    if (err) {
        rej(err)
    }
    res(rs);
}
export function createTravel(travelModel) {
    let { cls } = Entities.travel
    return new Promise((res, rej) => {

        let queryInst = `INSERT INTO ${Entities.travel.name} (${cls.username}, ${cls.dateCreated}, ${cls.travelNm}, ${cls.travelDes}, ${cls.status})`
            + ` VALUES('${travelModel.username}', '${travelModel.dateCreated}', '${travelModel.travelNm}', '${travelModel.travelDes}', ${travelModel.status})`
        console.log("ddd", queryInst)
        connection.query(queryInst, (err, rs, fields) => handleQueryRs(err, rs, res, rej))
    })
}
/**
 * 
 * @param {*string} username
 * @returns {*array} all travel history of travelModel
 */
export function getTravels(username) {
    let { cls } = Entities.travel
    return new Promise((res, rej) => {
        
        let whereClause = username ? `AND ${cls.username} = '${username}'` : ''

        connection.query(`SELECT * FROM ${Entities.travel.name} WHERE 1 = 1 ${whereClause}`, (err, rs) => {
            if (err) {
                rej(err)
            }
            
            let travels = rs.map(t => {
                return new Travel(t[cls.id], t[cls.username], t[cls.dateCreated], t[cls.travelNm], t[cls.travelDes], t[cls.status]);
            })

            res(travels)
        });
    })
}

