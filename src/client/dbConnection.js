const { MongoClient } = require('mongodb');
const { dbUri } = require('../config/constant');

class Connect {
  constructor(collection) {
    this.connect(collection)
  }

  async connect(collection){
    // try {
    //   mongoCLient = new MongoClient(dbUri);
    //   await mongoCLient.connect()
    //   console.log('Atlas connection succefull');
    //   const db = mongoCLient.db('assets');
    //   this.collection = db.collection(collection)
    //   this.close = mongoCLient.close;
    // } catch(error) {
    //   this.error = error;
    // }

    // MongoClient.connect(dbUri, (err, db)=>{
    //   if(err) this.err = err;
    //   const dbo = db.db('assets');
    //   this.collection = dbo.collection(collection);
    // })
  }
}

module.exports =  Connect;
