import * as userServices from "../services/userServices"

export async function createUser(req, res) {
    const { body } = req
    return await userServices.createUser({
        username: body.username,
        password: body.password,
        fullName: body.fullName,
        phone: body.phone,
        email: body.email
    })
}

export async function getUser(){
    return new Promise((res, rej) =>{
        userServices.getUser().then(rs =>{
            res(rs)
        }).catch(err =>{
            rej(err)
        })
    }) 
}
