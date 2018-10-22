import express from "express"

import { TravelController } from "../../controllers"
import { errorHandle } from "../../utils";

const router = express.Router();

router.get('/api/travel/get', (req, res) => {
    TravelController.getTravels(req).then(data => {
        res.json(data)
    }).catch((err) => errorHandle.catchEx(err, res))


})
router.post('/api/travel/create', (req, res) => {
    TravelController.createTravel(req, res).then(data => {
        res.json(data)
    }).catch((err) => errorHandle.catchEx(err, res))
})

export default router;