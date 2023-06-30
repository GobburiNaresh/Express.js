const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('success', { message: 'Form filled successfully!' });
});

module.exports = router;
