const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const weekholidays = require('../models/bankHolidays.js');

app.use(express.static('views'))
app.use(bodyParser.urlencoded({extended:false}))

exports.getProfile = async(req,res)=>{
    try{
        res.sendFile('./views/index.html',{root:"."})
    }
     catch(err){
         res.status(401).json({
             status:"fail",
             message:err
         })

    }
}

exports.createProfile = async(req,res)=>{
    const holidays = new weekholidays({
        name:"england-and-wales",
        rating:5
    })
    holidays.save().then(doc=>{
        console.log(doc);
    }).catch(err=>{
        console.log("error")
    })
}

exports.user_result= async (req,res)=>{
    try{
        const division_date = await req.body.division_date
        const result = weekholidays.aggregate([
            {
                $match:{date:"division_date"}
            },
            {
                $group:{
                    _id:null,
                    title,
                    notes,
                }
            }
        ]);
        res.send(result)

    }
    catch(err){

    }
}