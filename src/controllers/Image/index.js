import { ImageServices } from "../../services"
import { BaseResult } from "../../models/apiModel";

import { jwtHelper } from "../../utils"

const ImageController = {
    uploadImage: (req, respond) => {
        return new Promise((res, rej) => {
      
            ImageServices.uploadImage(req.query.ownerID, req.files.files.data).then(data => {
                res(new BaseResult(200, "Success", false, data))
            }).catch(err => {
                rej(err)
            })
        })
    },

    getImageById: (req, res) => {
        return new Promise((res, rej) => {
            ImageServices.getImageById(req.query.id).then(image => {
                res(image.data)
            }).catch(err => {
                rej(err)
            })
        })
    }
}

export default ImageController 