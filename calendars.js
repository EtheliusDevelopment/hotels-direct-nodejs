//REFERENCED DOCUMENTS MODEL
const Hotel = require ('../models/hotelDetails');
const Calendar = require ('../models/dailyRates.js');


const addAvailForm = async (req, res) => {
    try {
        let rateid = req.params.id
        let hotel = await Hotel.findOne({ 'rateslist._id' : rateid})
        .lean()
        const myArray = hotel.rateslist
        const rateName = myArray.find(findId)
        
        function findId ( item ) {
            return item._id == rateid
        }

        res.render('loadRates/addavailabilities', {title: "Total Booking Add Availabilities",
        hotel,
        rateid,
        rateName
    })

    } catch (err) {
        console.log(`Errore in catch ${hotel}`)
        console.log(err);
        res.render('error')
    }
}; //end function



                    
//******************************FUNZIONE CORRETTA*****************************/
const addAvailabilities = async (req, res) => {
    try {
        console.log(`prima della funzione FOR ${req.params.id}`)
        let nameRateId = req.params.id;
        let from = new Date (req.body.date);
        let to = new Date ( req.body.date2);
        const property = await Hotel.findOne({ 'rateslist._id' : nameRateId})
        const propertyname = property.nameHotel
        const myArray = property.rateslist
                                                
        const rateName = myArray.find(findId)
        
        function findId ( item ) {
            return item._id == nameRateId
        }
        const rateNameName =  rateName.nameRate

        for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
            
            const calendar = new Calendar({
                date : (day),
                allotment : req.body.allotment,
                price : req.body.price
            })
            
                     
            await calendar.save()
            await rateName.dailyrates.push(calendar)
            await property.save()
            
        }
        console.log(propertyname)
        

        res.render('loadRates/availSucess', {title: "Total Booking Availabilities",
        property,
        rateName,
        rateNameName,
        propertyname,
        nameRateId,
        from,
        to

    })
        
    } catch (err) {
        console.log(err);
    }
}  //end function

//******************************FUNZIONE CORRETTA*****************************/


const showratedetails = async (req, res) => {
    try {
        let rateid = req.params.id
        let hotel = await Hotel.findOne({ 'rateslist._id' : rateid})
        .lean()
        let hotelId = hotel._id
        console.log(`ID dell' hotel è ${hotelId}`)
        let hotel2 = await Hotel.findById(hotelId)
        .populate({
            path : "rateslist",
            populate: {
                path: "dailyrates",
                model : "Calendar"
            }
        })
        .lean()
        
        

              
        
        console.log(`Hotel chiamato per ID ${hotel2}`);
        console.log(`ID DELLA TARIFFA è ${hotel}`)
        res.render('loadRates/showratedetail', {title: "prova populate",
    
        hotel2,
        rateid
    })
    } catch (err) {
        console.log(err);
        res.render ('error')
    }
}





module.exports = {
    addAvailForm,
    addAvailabilities,
    showratedetails   
} 