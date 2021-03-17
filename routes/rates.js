const express = require ('express');
const router = express.Router();
var ratesCtrl = require('../controllers/rates');
const calendarCtrl = require ('../controllers/calendars')





// router.get('/:id', hotelCtrl.show);
// router.get('/addrates/:id', hotelCtrl.loadingRate)

router.post('/rooms/:id/rateslist', ratesCtrl.create);


router.get('/addavailabilities/:roomId/:id', calendarCtrl.addAvailForm)





module.exports = router;





