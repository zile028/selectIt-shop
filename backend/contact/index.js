const mongoose = require('mongoose');


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