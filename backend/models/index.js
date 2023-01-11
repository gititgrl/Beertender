// dependencies
const mongoose = require("mongoose")
require("dotenv").config()
const connectionString = process.env.MONGODBURI


mongoose.set('strictQuery', false)
// connect to MongoDB via mongoose
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// console.log() connection status
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

module.exports.User = require('./user')
module.exports.Favorite = require('./favorite')