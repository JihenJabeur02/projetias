const express = require('express');
const app = express();
const cors = require('cors');

// Database and models
const db = require('./db/index');
const f = require('./models/industries');
const g = require('./models/product');
const h = require('./models/Cart');
const y = require('./models/request');
const o = require('./models/RequestDetails');
// Route imports
const industryRouter = require('./routes/industries');
const productsRouter = require('./routes/products');
const CartRouter = require('./routes/Cart');
const RequestRouter = require('./routes/Request');
const requestDetailstRouter = require('./routes/RequestDetails');
// Middleware setup
app.use(cors());
app.use(express.json());

// Route setup
app.use('/industries', industryRouter);
app.use('/products', productsRouter);
app.use('/Cart', CartRouter);
app.use('/Request', RequestRouter);
// Server start
app.listen(5000, () => {
    console.log('listening on port 5000');
});
