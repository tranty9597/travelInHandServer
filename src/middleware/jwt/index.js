import expressJwt from "express-jwt"
import { jwtConfig, pathConfig } from "../../config"

export default function jwt() {
    return expressJwt({ secret: jwtConfig.secret }).unless({
        path: [pathConfig.user.login, pathConfig.user.regiter, '/api/image/getByID']
    })
}