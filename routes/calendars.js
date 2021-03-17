const express = require ('express');
const router = express.Router();
var ratesCtrl = require('../controllers/rates');
const calendarCtrl = require ('../controllers/calendars')



router.post('/:roomId/:id', calendarCtrl.addAvailabilities);


router.get('/showratedetails/:roomId/:rateId', calendarCtrl.showratedetails);




module.exports = router;