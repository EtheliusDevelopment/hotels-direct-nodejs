const Hotel = require ('../models/hotelDetails')


const loadingRooms = async (req, res) => {
    try {
        let rateid = req.params.id
        let hotel = await Hotel.findById(rateid)
        .populate({
            path : "rateslist",
            populate: {
                path: "dailyrates",
                model : "Calendar"
            }
        })
        .lean()
        if (!hotel) {
            res.render('error')
        } else {
            console.log(hotel)
            console.log(hotel.nameHotel)
            res.render('loadRates/addRoom', {title: 'Add new Room',
        hotel,
        rateid
    })
    
        }
        
    } catch (err) {
        console.log(err);
        res.render ('error')
    }
}

const createRoom = async (req, res) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        await hotel.rooms.push({
            nameRoom: req.body.nameRoom ,
            maxAdt: req.body.maxAdt ,
            maxChd: req.body.maxChd ,
            description: req.body.description ,
            images: req.body.images

        });
        await hotel.save()
        res.redirect(`/hotel/${hotel._id}`);

        

        
    } catch (err) {
        console.log(err);
        res.render('error')
    }
}

const loadingRate = async (req, res) => {
    try {
        let roomId = req.params.id;
        let hotel = await Hotel.findOne({ 'rooms._id' : roomId})
        .populate(/* {
            path : "rateslist",
            populate: {
                path: "dailyrates",
                model : "Calendar"
            }
        } */'rooms')
        .lean()
  
        if(!hotel) {
            res.render('error')
        }
        res.render('loadRates/addRates', { title : 'Create New Rate',
            hotel,
            roomId
        })
        
    } catch (err) {
        console.log(err);
        res.render('error')
    }
  } //Function End






module.exports = {
    loadingRooms,
    createRoom,
    loadingRate
}