import express from "express"

import * as travelStepController from "../controllers/travelStepController"

import { BaseResult } from "../models"
const router = express.Router();

router.get('/travelStep/get', async (req, res) => {
    travelStepController.getTravelSteps(req).then(data =>{
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
router.post('/travelStep/create', async (req, res) => {
    res.json(await travelStepController.createTravelStep(req, res))
})

export default router;