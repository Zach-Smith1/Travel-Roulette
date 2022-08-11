const express = require('express');
const compression = require('compression')


//create server
var app = express();
//set port number
var port = 3000;
//middle ware
app.use(express.json());
app.use(express.static('./dist'));
app.use(compression())


app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});


