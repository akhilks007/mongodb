const express = require('express');
const bodyParser = require('body-parser');


const connect = require('./client/dbConnection');

const router = require('./router');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(router);
app.use('/*', (req, res)=>{
  res.send('API Not found');
})

app.listen(port, ()=> {
  connect();
  console.log(`listening to http://localhost:${port}`)
});
