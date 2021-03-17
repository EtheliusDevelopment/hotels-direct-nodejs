//EMBEDDED SUBDOCUMENTS SAVE MODEL

const Hotel = require ('../models/hotelDetails');


const  create = async (req, res) => {
  try {
    
      const roomId = await req.params.id
      const property = await Hotel.findOne({ 'rooms._id' : roomId })
      
      

     
      
     

      const myArray = property.rooms
      const roomLog = myArray.find(findId)
      function findId ( item ) {
      return item._id == roomId
      }
      
                               
     
      await roomLog.rateslist.push({
      nameRate : req.body.rateName,
      nonRefundable : req.body.nonRefundable ,
      cancpolicy : req.body.cancpolicy ,
      release : req.body.release ,
      minStay : req.body.minStay ,
      minStayPeriod : req.body.minStayPeriod,
      advBooking : req.body.advBooking, 
      advBookingPeriod :req.body.advBookingPeriod
    });
  
    await property.save()
    res.redirect(`/hotel/${property._id}`);
    
  } catch (err) {
    console.log(err);
    res.render('error')
  }
}//function end  

//router.get('/showrates/:id', ratesCtrl.showRateDetail)

const showRateDetail = async (req, res) => {
  try {
    const roomId = req.params.id
    const property = await Hotel.findOne({'rooms._id' : roomId})
    .lean()
    .populate("property")
    res.render('loadRates/showratedetail', {title :" Rates availables",
  property,
  roomId
})

    
  } catch (err) {
    console.log(err);
    res.render('error')
  }
}




module.exports = {
  create,
  showRateDetail
 
};




