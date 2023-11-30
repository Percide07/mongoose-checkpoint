const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true ,
        unique: true,
    },
    age : {
        type : Number ,
        require : true,
        unique : false,
    },
    favoriteFoods : {
        type : Array,
        require : true,
        unique : false
    }

}) ;


module.exports = mongoose.model.Users || mongoose.model("Users",UserSchema);