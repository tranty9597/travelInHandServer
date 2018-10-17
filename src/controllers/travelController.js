import * as TravelServices from "../services/travelServices"

export async function createTravel(req, res) {
    const { body } = req;

    let { username, travelNm, travelDes, status } = body
    return await TravelServices.createTravel({
        username,
        travelNm,
        travelDes,
        status,
        dateCreated: '2018-10-10'
    })
}

export async function getTravels(req) {
    return new Promise((res, rej) => {
        TravelServices.getTravels(req.query.username).then(rs => {
            res(rs)
        }).catch(err => {
            console.log(err)
            rej(err)
        })
    })
}
