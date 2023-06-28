//creation of products

const express =require('express');
const path = require('path');
const rootDir = require('../helper/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {//only handle get request and return the form.
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
  
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports= router;

