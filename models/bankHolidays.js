const mongoose= require('mongoose');
const bankholiday= new mongoose.Schema({
    name:{
        type:String,

    },
    rating:{
        type:Number
    }
})

const weekholiday=mongoose.model('weekholiday',bankholiday);
module.exports=weekholiday