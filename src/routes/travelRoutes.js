import express from "express"

import * as travelController from "../controllers/travelController"

import { BaseResult } from "../models"
const router = express.Router();

router.get('/travel/get', async (req, res) => {
    travelController.getTravels(req).then(data =>{
        res.json(new BaseResult(
            200,
            "Success",
            data
        ))
    }).catch(err =>{
        res.json(new BaseResult(
            ...err
        ))
    })

    
})
router.post('/travel/create', async (req, res) => {
    res.json(await travelController.createTravel(req, res))
})

export default router;