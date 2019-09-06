const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


const retailerRoutes = require('./routes/retailerRoutes');
const purchaseOrderRoute = require('./routes/purchaseOrderRoute');
const retailerTankRoute = require('./routes/retailerTankRoute');
const inventoryRoute = require('./routes/inventoryRoute');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });
app.use('/retailer', (retailerRoutes));
app.use('/order', (purchaseOrderRoute));
app.use('/tank', (retailerTankRoute));
app.use('/inventory', (inventoryRoute));

module.exports = app;
