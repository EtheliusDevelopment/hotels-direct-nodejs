const Hotel = require ('../models/hotelDetails')



const saveHotel = async (req, res) =>{
    try {
        
            const hotel = new Hotel ({
            nameHotel : req.body.nameHotel,
            emailHotel : req.body.emailHotel,
            phoneHotel : req.body.phoneHotel,
            websiteHotel : req.body.websiteHotel,           
            typeHotel : req.body.typeHotel,
            stars : req.body.stars,
            country : req.body.country,
            region : req.body.administrative_area_level_1,
            province : req.body.administrative_area_level_2,
            municipality : req.body.administrative_area_level_3,
            locality : req.body.locality,
            street : req.body.route,
            streetNumber : req.body.street_number,
            formattedaddress : req.body.formattedAddress,
            lat : req.body.lat,
            lng : req.body.lng,
            facilitiesHotel : req.body.facilitiesHotel ,          
            images : req.body.images,
                        
        })
        let control = req.body.control
        if (control == 10) {
            await hotel.save();
            res.redirect(`http://localhost:8080/hotel/${hotel._id}`);
        } else {
            
            res.render('loadRates/addHotel', { title: 'TotalBooking - Create Hotel' })  
        }
       
    } catch (err) {
        console.log(err)
        res.render('error')
    }
}


const show = async (req, res) => {
    try {
        let hotel = await Hotel.findById(req.params.id)
        //.populate(rateslist)
        .lean()

        if(!hotel) {
            res.render('error')
        }
        res.render('loadRates/show',{ title : 'TotalBooking Property Details',
            hotel
        })
        
    } catch (err) {
        console.log(err);
        res.render('error')
    }
} // Function End




module.exports = {
    saveHotel,
    show

}




