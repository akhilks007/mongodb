const router = require('express').Router();
const assetRouter = require('./assetRouter');

const basePath = '/ams/v1';

router.use(basePath, assetRouter);

module.exports = router;
