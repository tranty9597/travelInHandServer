import { UserService } from "../../services"

const UserController = {
    createUser: async (req, res) => {
        const { body } = req
        return await UserService.createUser({
            username: body.username,
            password: body.password,
            fullName: body.fullName,
            phone: body.phone,
            email: body.email
        })
    },

    getUser: async () => {
        return new Promise((res, rej) => {
            UserService.getUser().then(rs => {
                res(rs)
            }).catch(err => {
                rej(err)
            })
        })
    }
}

export default UserController 