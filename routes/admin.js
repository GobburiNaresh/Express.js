//creation of products

const express =require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {//only handle get request and return the form.
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Product Title"><br><br><input type="text" name="Cost" placeholder="Product Cost"><br><br><button type="submit">Add Product</button></form>');
});
  
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports= router;

