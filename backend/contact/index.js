const mongoose = require('mongoose');
// const contactDbUrl = 'mongodb+srv://selectItConnect:dHT26w1aoEQBefmD@selectitconect.ljwujod.mongodb.net/?retryWrites=true&w=majority';

const contactDbUrl = require("./contactConfigDb")

const connectContactDB = async () => {
  try {
    await mongoose.createConnection(contactDbUrl);
    console.log('Contact database connected');
  } catch (error) {
    console.log(error);
  
  }
};

module.exports = connectContactDB;