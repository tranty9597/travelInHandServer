import express from "express"
import fileUpload from "express-fileupload"
import { ImageController } from "../../controllers"
import { errorHandle } from "../../utils";

const router = express.Router();
router.use(fileUpload())

router.get('/api/image/getByID', (req, res) => {
    ImageController.getImageById(req).then(data => {
        res.end(data)
    }).catch((err) => res.json(err))


})
router.post('/api/image/upload', (req, res) => {

    ImageController.uploadImage(req, res).then(data => {
        res.json(data)
    }).catch(err => res.json(err))
})

export default router;