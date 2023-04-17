const mongoose = require('mongoose');


const contactDbUrl = require("../../config/configDb")

const connectContactDB = async () => {
  try {
    await mongoose.connect(contactDbUrl);
    console.log('Contact database connected');
  } catch (error) {
    console.log(error);
  
  }
};

module.exports = connectContactDB;