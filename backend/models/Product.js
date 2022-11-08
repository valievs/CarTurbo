const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    img:{type:String,required:true},
    marka: {type:String, required:true},
    model: {type:String, required:true},
    carType: {type:Array, required:true},
    categories: {type:Array, required:true},
    color: {type:String, required:true},
    price: {type:Number, required:true},
    mileage:{type:Number, required:true},
    petrol:{type:String, required:true},
    gear:{type:String, required:true},
    transmission:{type:String, required:true},
    motor:{type:Number, required:true},
    year:{type:String, required:true},
    desc:{type:String, required:false},
},{timestamps:true});

module.exports = mongoose.model("Product", ProductSchema)