const express = require('express');
const assetController = require('../controller/assetController');

const assetRoutes = {
  assets: '/assets'
}

const assetRouter = express.Router();

assetRouter
  .route(assetRoutes.assets)
  .get(assetController.getassets)

module.exports = assetRouter;
