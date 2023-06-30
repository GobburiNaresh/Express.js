const path = require('path');
const rootDir = require('../helper/path');
exports.contactGetController = (req, res, next) => {
    res.render('contactus', { pageTitle: 'Contact Us' });
};

exports.contactPostController = (req, res, next) => {
    console.log(req.body);
    res.render('success', { message: 'Form filled successfully!' });
};
  