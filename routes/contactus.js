const express =require('express');
const path = require('path');
const rootDir = require('../helper/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {//only handle get request and return the form.
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});
  
router.post('/contactus', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
});

module.exports= router;
