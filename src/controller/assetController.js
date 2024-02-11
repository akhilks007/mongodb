const AssetService = require('../services/assets');

module.exports = {
  getassets: async (req, res)=>{
    const allAssets = AssetService.getAllModels();
    allAssets
      .then(result => res.send(result))
      .catch(err => res.send(err))
    //   console.log(allAssets);
    // res.send(allAssets);
  }
};
