const mongoose = require('mongoose');
const { dbUri } = require('../config/constant');


const connect = async() => {
  await mongoose.connect(dbUri)
    .then(result => {
      console.log('DB connection succesfull');
    })
    .catch(err => console.error(err));
  }

module.exports =  connect;
