
import connection, { Entities } from "../DbConnection"

export function createUser(user) {
    return new Promise((res, rej) => {
        let queryInst = `INSERT INTO ${Entities.user.name} VALUES('${user.username}', '${user.password}', '${user.fullName}', '${user.phone}', '${user.email}')`
        connection.query(queryInst, (err, rs, fields) => {
            res(Object.assign({}, { rs }))
        })
    })
}

export function getUser() {
    return new Promise((res, rej) => {
        connection.query(`SELECT * FROM ${Entities.user.name}`, (err, rs, fields) => {
            if(err){
                rej(err)
            }
            res(rs);
        });
    })


}
