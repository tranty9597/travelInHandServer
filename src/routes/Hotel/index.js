import express from "express"
import { HotelController } from "../../controllers"
import { errorHandle } from "../../utils";

const router = express.Router();

router.get('/api/hotel/getByCityOrLocation', (req, res) => {
    HotelController.getHotelByCityOrLocation(req).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))


})

export default router;