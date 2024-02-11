const Asset = require('../model/assetsModel');

module.exports = {
  getAllModels: ()=> {
    return Asset.find();
  }
}
