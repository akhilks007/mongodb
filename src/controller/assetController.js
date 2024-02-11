const httpStatus = require('http-status');
const AssetService = require('../services/assets');
const responseHelper = require('../utils/response_helper');

module.exports = {
  getAssets: (req, res)=>{
    const allAssets = AssetService.getAllAssets();
    allAssets
      .then(result => responseHelper(res, httpStatus.OK, 'success', result))
      .catch(err => responseHelper(res, httpStatus.FAILED_DEPENDENCY, 'failed', err));
  },

  createAsset: (req, res)=> {
    const newAsset = AssetService.createAsset(req.body);
    newAsset
      .then(result => responseHelper(res, httpStatus.OK, 'success', result))
      .catch(err => responseHelper(res, httpStatus.FAILED_DEPENDENCY, 'failed', err));  
  }
};
