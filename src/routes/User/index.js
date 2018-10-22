import express from "express"

import { UserController } from "../../controllers"

import { pathConfig } from "../../config";

const router = express.Router();

router.post(pathConfig.user.login, async (req, res) => {
    UserController.login(req, res).then(data =>{
        res.json(data)
    }).catch(err =>{
        res.json(err)
    })

    
})
router.post(pathConfig.user.regiter, async (req, res) => {
    res.json(await UserController.createUser(req, res))
})

export default router;