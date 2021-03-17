const mongoose = require ('mongoose');
const { Schema } = mongoose




// *******************SUB CHILD SCHEMA***********************//

const RateNameSchema = new Schema ({                

    nameRate : {
        type : String,
        required : true
    },
    nonRefundable : {
        type : Boolean,
        default : false,
        required : true
    },
    cancpolicy : {
        type : Number,
        default : 1,
    },
     release : {
        type : Number,
        default : 0,
    },
    minStay : {
        type : Boolean,
        default : false,
        required : true
    },
    minStayPeriod :{
        type : Number,
        default : 0
    },
    advBooking : {
        type : Boolean,
        default: false,
        required : true
    },
    advBookingPeriod : {
        type: Number,
        default : 0
    },
 
    dailyrates : [{
        type: Schema.Types.ObjectId,
        ref : "Calendar"
        
    }]


}, { timestamps: true }
);

// ******************* CHILD SCHEMA***********************//

const RoomsSchema = new Schema ({                

    nameRoom : {
        type : String,
        required : true
    },
    maxAdt : {
        type : Number,
        default : false,
        required : true
    },
    maxChd : {
        type : Number,
        default : 1,
    },
     description : {
        type : String,
        default : 0,
    },

    images : [String],
    
    rateslist : [RateNameSchema],
 
    }, { timestamps: true }
);


// *******************PARENT SCHEMA***********************//

HotelSchema = new Schema ({

    nameHotel : String,
    emailHotel : {
        type : String,
        required : true
    },
    phoneHotel : {
        type : String,
        required :true
    },
    websiteHotel : String,
   
    typeHotel : {
        type : String,
        enum : ['Hotel', 'Residence', 'Aparthotel', 'Motel', 'Apartament', 'Resort'],
        default : 'Hotel'
    },

    stars : {
        type : Number,
        min : 1,
        max : 5
    },

    country : String,
    region : String,
    province : String,
    municipality : String,
    locality : String,
    street : String,
    formattedaddress : String,
    lat : Number,
    lng : Number,
    streetNumber : String,

    facilitiesHotel : {
        type : [String],
        // enum : ['Hotel', 'Residence', 'Aparthotel', 'Motel', 'Apartament', 'Resort'],
        default : 'Free Wi-Fi'
    },

    images : [String],

    rooms : [RoomsSchema],

    // rateslist : [RateNameSchema]



}, { timestamps: true }
)






const Hotel = mongoose.model('Hotel', HotelSchema);
module.exports = Hotel;




