const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.use(router);
app.use('/*', (req, res)=>{
  res.send('API Not found');
})

app.listen(port, ()=> {
  console.log(`listening to http://localhost:${port}`)
});