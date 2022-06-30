const express = require("express")
const router = express.Router()
const commentController = require('../controller/commentController')
const verify = require('../verifyToken.js')

router.put('/creatcomment' ,verify, commentController.createComment)
router.get('/getcomment', verify, commentController.getSingleUserComment)
router.get('/getallcomment', verify, commentController.getAllUserComment)
router.post('/gettoken', commentController.getToken)

module.exports = router