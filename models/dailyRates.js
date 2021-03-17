const mongoose = require ('mongoose');
const { Schema } = mongoose;



const CalendarSchema = new Schema ({
    
    
        night : {
         type: Date,
         format: 'MMMM Do YYYY'
        },
        allotment: Number,
        price : Number
 

}, { timestamps: true }
);




const Calendar = mongoose.model('Calendar', CalendarSchema);
module.exports = Calendar;

