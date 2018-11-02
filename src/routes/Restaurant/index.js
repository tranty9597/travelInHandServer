import express from "express"
import { RestaurantController } from "../../controllers"
import { errorHandle } from "../../utils";

const router = express.Router();

router.get('/api/restaurant/getByCityOrLocation', (req, res) => {
    RestaurantController.getRestaurantByCityOrLocation(req).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))


})

export default router;