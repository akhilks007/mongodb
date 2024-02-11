const Connect = require('../client/dbConnection');

module.exports = {
  getassets: (req, res)=>{
    const asset = new Connect('my_assets');
    res.send(`${JSON.stringify(asset)}`);
  }
};
