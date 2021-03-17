const express = require ('express');
const router = express.Router();
const hotelCtrl = require ('../controllers/hotel')
const roomCtrl = require ('../controllers/rooms')





router.get('/add', (req, res) =>{
    res.render('loadRates/addHotel', { title: 'TotalBooking - Create Hotel' })  
});

router.post('/', hotelCtrl.saveHotel); 

router.get('/:id', hotelCtrl.show);
//http://localhost:8080/hotel/603808aac694514af85f69c4

//router.get('/addrates/:id', hotelCtrl.loadingRate)

//http://localhost:8080/hotel/addrates/603808aac694514af85f69c4

router.get('/addrooms/:id', roomCtrl.loadingRooms)




module.exports = router;