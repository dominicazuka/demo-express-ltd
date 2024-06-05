const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
        const mongoURL = process.env.MONGODB_URI;
        await mongoose.connect(mongoURL);
        console.log('Mongo DB Connection Successful');
    } catch (error) {
        console.log('Mongo DB Connection Failed');
    }
}

module.exports = connectDb;