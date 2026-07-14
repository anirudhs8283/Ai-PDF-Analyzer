const express = require('express')
const upload = require('../middlewares/upload')
const { pdfController } = require('../controllers/pdf.controller')
const asyncWrapper = require('../middlewares/asyncWrapper')
const router = express.Router()

router.post('/pdf/analyze' ,upload.single('document'), asyncWrapper(pdfController) )

module.exports = router