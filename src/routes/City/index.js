import express from "express"
import { CityController } from "../../controllers"

const router = express.Router();

router.get('/api/city/get', (req, res) => {
    CityController.getCity(req).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))


})
router.get('/api/city/getByID', (req, res) => {
    CityController.getCityByID(req).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))


})
export default router;