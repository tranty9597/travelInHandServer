import { TravelService } from "../../services"

const TravelController = {
    createTravel: async (req, res) => {
        const { body } = req;

        let { username, travelNm, travelDes, status } = body
        return await TravelService.createTravel({
            username,
            travelNm,
            travelDes,
            status,
            dateCreated: '2018-10-10'
        })
    },

    getTravels: async (req) => {
        return new Promise((res, rej) => {
            TravelService.getTravels(req.query.username).then(rs => {
                res(rs)
            }).catch(err => {
                console.log(err)
                rej(err)
            })
        })
    }
}

export default TravelController 