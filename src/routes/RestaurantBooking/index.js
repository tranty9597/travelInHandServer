import express from "express"

import { RestaurantBookingController } from "../../controllers"

import { BaseResult } from "../../models"

const router = express.Router();

router.get('/api/restaurantBooking/get', async (req, res) => {
    RestaurantBookingController.getRestaurantBooking(req).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })


})
router.post('/api/restaurantBooking/create', async (req, res) => {
    res.json(await RestaurantBookingController.createRestaurantBooking(req, res))
})

export default router;