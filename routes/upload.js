const express = require("express")
const router = express.Router({ mergeParams: true })
const controller = require("../controllers/upload")
const validate = require("../middlewares/validate")
const { signedUrl } = require("../validations/upload")

router.get("/", controller.getAll)
router.post("/", validate(signedUrl), controller.createSignedUrl)
router.put("/", controller.updateUpload)

module.exports = router
