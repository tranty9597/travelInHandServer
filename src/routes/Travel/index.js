import express from "express"

import { TravelController } from "../../controllers"

const router = express.Router();

router.get('/api/travel/get', (req, res) => {
    TravelController.getTravels(req).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))


})
router.get('/api/travel/getActive', (req, res) => {
    TravelController.getActiveTravel(req).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))


})
router.post('/api/travel/create', (req, res) => {
    TravelController.createTravel(req, res).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))
})

router.put('/api/travel/changeStatus', (req, res) => {
    TravelController.changeStatus(req, res).then(data => {
        res.json(data)
    }).catch(err => res.json(err))
})

export default router;