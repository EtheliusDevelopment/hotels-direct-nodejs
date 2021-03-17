const express = require ('express')
const router = express.Router();
const hotelCtrl = require ('../controllers/hotel')
const roomCtrl = require ('../controllers/rooms') 
const ratesCtrl = require ('../controllers/rates')



router.post('/hotel/:id/rooms', roomCtrl.createRoom)


router.get('/addrates/:id', roomCtrl.loadingRate)

router.get('/showrates/:id', ratesCtrl.showRateDetail)







module.exports = router;

