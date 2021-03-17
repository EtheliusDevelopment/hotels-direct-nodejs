const Hotel = require ('../models/hotelDetails');


// populate dashboard with hotels data // 
const populateDashboard = async ( req, res) => {
    try {
        const hotels = await Hotel.find().lean()
        res.render('loadRates/dashboard', {title : 'TotalBooking Dashboard',
        hotels
    })
        
    } catch (err) {
        console.log(err);
        res.render('error')
    }
}  // end functions



module.exports = {
    populateDashboard
}


