import express from "express"
import { TransportationController } from "../../controllers"
import { errorHandle } from "../../utils";

const router = express.Router();

router.get('/api/transportation/get', (req, res) => {
    TransportationController.getTranportation(req).then(data => {
        res.json(data)
    }).catch((err) => res.json(err))


})

export default router;