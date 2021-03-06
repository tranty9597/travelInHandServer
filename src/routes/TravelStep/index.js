import express from "express"

import { TravelStepController } from "../../controllers"



const router = express.Router();

router.get('/api/travelStep/get', (req, res) => {
    TravelStepController.getTravelSteps(req).then(data => {
        res.json(data)
    }).catch(err => res.json(err))
})

router.get('/api/travelStep/getDetail', (req, res) => {
    TravelStepController.getStepDetail(req).then(data => {
        res.json(data)
    }).catch(err => res.json(err))
})

router.get('/api/travelStep/getHistoryDetail', (req, res) => {
    TravelStepController.getHistoryStepDetail(req).then(data => {
        res.json(data)
    }).catch(err => res.json(err))
})

router.post('/api/travelStep/create', (req, res) => {
    TravelStepController.createTravelStep(req, res).then(data => {
        res.json(data)
    }).catch(err => res.json(err))
})
router.put('/api/travelStep/changeStatus', (req, res) => {
    TravelStepController.changeStatus(req, res).then(data => {
        res.json(data)
    }).catch(err => res.json(err))
})

export default router;