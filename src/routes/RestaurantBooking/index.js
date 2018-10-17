import express from "express"

import { RestaurantBookingController } from "../../controllers"

import { BaseResult } from "../../models"

const router = express.Router();

router.get('/restaurantBooking/get', async (req, res) => {
    RestaurantBookingController.getRestaurantBooking().then(data => {
        res.json(new BaseResult(
            200,
            "Success",
            data
        ))
    }).catch(err => {
        res.json(new BaseResult(
            ...err
        ))
    })


})
router.post('/restaurantBooking/create', async (req, res) => {
    res.json(await RestaurantBookingController.createRestaurantBooking(req, res))
})

export default router;