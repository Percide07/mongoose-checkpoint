const mongoose = require('mongoose');
require("dotenv").config();

dbconnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect is okkkk!");
    }
    catch(error){
        console.log("Unable to Connect!!");
        console.log(error);
    }
}
module.exports = dbConnect;