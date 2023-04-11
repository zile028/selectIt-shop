const mongoose = require('mongoose');
const contactDbUrl = 'mongodb+srv://filipjovicccc:UR8BiLZXXFO63Tih@cluster0.ppeg7qt.mongodb.net/?retryWrites=true&w=majority';

const connectContactDB = async () => {
  try {
    await mongoose.createConnection(contactDbUrl);
    console.log('Contact database connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectContactDB;