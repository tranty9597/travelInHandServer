
import connection, { Entities } from "../../DbConnection"
import { User } from "../../models";

const UserService = {
    createUser: (user) => {
        return new Promise((res, rej) => {
            let queryInst = `INSERT INTO ${Entities.user.name} VALUES('${user.username}', '${user.password}', '${user.fullName}', '${user.phone}', '${user.email}')`
            connection.query(queryInst, (err, rs, fields) => {
                res(Object.assign({}, { rs }))
            })
        })
    },

    login: (username, password) => {

        return new Promise((res, rej) => {
            let { cls } = Entities.user
            connection.query(`SELECT * FROM ${Entities.user.name} WHERE ${cls.username}='${username}' AND ${cls.password}='${password}'`, (err, rs, fields) => {
                if (err) {
                    rej(err)
                }

                let user = rs[0]
                if(user){
                    res(new User(user[cls.username], user[cls.fullName], user[cls.phone], user[cls.email]));
                }else{
                    res()
                }
               
            });
        })


    }
}

export default UserService