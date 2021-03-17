var express = require('express');
var router = express.Router();
const dashboardCtrl = require ('../controllers/dashboard')

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('loadRates/dashboard', { title: 'TotalBooking' });
}); */

router.get('/', dashboardCtrl.populateDashboard);

module.exports = router;
