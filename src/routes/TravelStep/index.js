import express from "express"

import { TravelStepController } from "../../controllers"
import { errorHandle } from "../../utils";


const router = express.Router();

router.get('/api/travelStep/get', async (req, res) => {
    TravelStepController.getTravelSteps(req).then(data => {
        res.json(data)
    }).catch(err => errorHandle.catchEx(err, res))


})
router.post('/api/travelStep/create', async (req, res) => {
    TravelStepController.createTravelStep(req, res).then(data => {
        res.json(data)
    }).catch(err => errorHandle.catchEx(err, res))
})

export default router;