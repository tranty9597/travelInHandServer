import { UserService } from "../../services"
import { UserResult, BaseResult } from "../../models/apiModel";

import { jwtHelper } from "../../utils"

const UserController = {
    createUser:  (req, res) => {
        const { body } = req
        return new Promise((res, rej) =>[
            UserService.createUser({
                username: body.username,
                password: body.password,
                fullName: body.fullName,
                phone: body.phone,
                email: body.email
            }).then(data => {
                res(new BaseResult(200, "Success", false, data))
            }).catch(err => {
                rej(err)
            })
        ]) 
    },

    login: (req, res) => {
        const { body } = req
        return new Promise((res, rej) => {
            console.log('Server running at', body);
            UserService.login(body.username, body.password).then(user => {
                if (user) {
                    res(new UserResult(200, "Login Success", false, user, jwtHelper.createJWToken({
                        sessionData: user,
                        maxAge: 3600
                    })))
                } else {
                    res(new BaseResult(200, "User not found", true))
                }

            }).catch(err => {
                rej(err)
            })
        })
    }
}

export default UserController 