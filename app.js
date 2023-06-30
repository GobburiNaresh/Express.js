const path = require('path');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//import error controller
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//
const contactRoutes = require('./routes/contactus');
app.set('views', path.join(__dirname, 'views')); // Specify the correct path to your views directory
app.use('/contactus', contactRoutes);




app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use('/', shopRoutes);

app.use(errorController.get404);

app.listen(3000);
