//REFERENCED DOCUMENTS MODEL
const Hotel = require ('../models/hotelDetails');
const {Room} = require ('../models/hotelDetails')
const Calendar = require ('../models/dailyRates.js');


const addAvailForm = async (req, res) => {
    try {
        //const room = await Room.findOne({'rateslist._id' : rateid});
        const rateid = req.params.id
        const roomId = req.params.roomId
       
        let hotel = await Hotel.findOne({ 'rooms._id' : roomId})
        .lean()
        const myArray = hotel.rooms
        let room = myArray.find(findId)
        
        function findId ( item ) {
            return item._id == roomId
        }
        const rateArray = room.rateslist
        const rate = rateArray.find(findrateid)
        function findrateid (idRate) {
            return idRate._id == rateid
        }
        
        res.render('loadRates/addAvailabilities', {title: "Total Booking Add Availabilities",
        hotel,
        rateid,
        roomId,
        room,
        rate
    })

    } catch (err) {
        //console.log(`Errore in catch ${hotel}`)
        console.log(err);
        res.render('error')
    }
}; //end function



                    
//******************************FUNZIONE CORRETTA*****************************/
const addAvailabilities = async (req, res) => {
    try {
        const roomId = req.params.roomId
        let nameRateId = req.params.id;
        let from = new Date (req.body.date);
        let to = new Date ( req.body.date2);
        const property = await Hotel.findOne({ 'rooms._id' : roomId})
       
        

        
        const myArray = property.rooms
        const room = myArray.find(findId)
        
        function findId ( item ) {
            return item._id == roomId
        }

        const rateArray = room.rateslist
        const rate = rateArray.find(findrateid)
        function findrateid (idRate) {
            return idRate._id == nameRateId
        }                                       
        
        const ratename = rate.nameRate;
        const roomname = room.nameRoom;
        const propertyname = property.nameHotel;

        for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
            
            const calendar = new Calendar({
                night : (day),
                allotment : req.body.allotment,
                price : req.body.price
            })
         
                     
            await calendar.save()
            await rate.dailyrates.push(calendar)
            await property.save()
            
        }
        
        

        res.render('loadRates/availSucess', {title: "Total Booking Availabilities",
        property,
        roomId,
        room,
        rateArray,
        rate,
        nameRateId,
        from,
        to,
        ratename,
        roomname,
        propertyname



    })
        
    } catch (err) {
        console.log(err);
    }
}  //end function

//******************************FUNZIONE CORRETTA*****************************/


const showratedetails = async (req, res) => {
    try {
        const roomId = req.params.roomId
        let nameRateId = req.params.rateId;
        const property = await Hotel.findOne({ 'rooms._id' : roomId})
        .lean()
       
        const myArray = property.rooms
        const room = myArray.find(findId)
        
        function findId ( item ) {
            return item._id == roomId
        }
        
        const rateArray = room.rateslist
        const rate = rateArray.find(findrateid)
        function findrateid (idRate) {
            return idRate._id == nameRateId
        }  
        
        const calendararray = rate.dailyrates
        const calendarTable = [];
        for(let i = 0; i<calendararray.length; i++) {
            const table = await Calendar.findById(calendararray[i])
            .sort({night: 'desc'})
                        calendarTable.push(table)
            
        }
        console.log(calendarTable);
        
         
        res.render('loadRates/showratedetail2',{
            calendarTable,
            roomId
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