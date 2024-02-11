const Asset = require('../model/assetsModel');

module.exports = {
  getAllAssets: async () => {
    return await Asset.find()
    .then();
  },

  createAsset: async (body) => {
    const newAsset = await Asset(body);
    return newAsset.save();
  }
}
