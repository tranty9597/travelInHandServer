import express from "express"

import * as userController from "../controllers/userController"

import { BaseResult } from "../models"
const router = express.Router();

router.get('/user/get', async (req, res) => {
    userController.getUser().then(data =>{
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
    res.json(await userController.createUser(req, res))
})

export default router;