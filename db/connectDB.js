const mongoose = require('mongoose');
const connectDB = async()=>{
    console.log('hi mongooose')
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/userAuth');
        // console.log(mongoDB connected:${conn.connection.host});
    console.log("mongoDb connected!!")
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;