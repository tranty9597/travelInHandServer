import express from "express"

import { UserController } from "../../controllers"

import { BaseResult } from "../../models"

const router = express.Router();

router.get('/user/get', async (req, res) => {
    UserController.getUser().then(data =>{
        res.json(new BaseResult(
            200,
            "Success",
            data
        ))
    }).catch(err =>{
        res.json(new BaseResult(
            ...err,
            data
        ))
    })

    
})
router.post('/user/create', async (req, res) => {
    res.json(await UserController.createUser(req, res))
})

export default router;