const { default: mongoose, Schema } = require('mongoose');

const assetsSchema = new Schema({
  asset_name: {
    type: String,
    required: true
  },
  asset_type: {
    type: String,
    required: true
  },
  user_has_asset: {
    type: Boolean,
    require: true
  }
}, {
  timestamps: true
});

const Asset = mongoose.model('my_assets', assetsSchema);

module.exports = Asset;
