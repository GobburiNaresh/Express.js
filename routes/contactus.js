const express =require('express');
const router = express.Router();
const path = require('path');


//import { contactUsController} from '../controllers/contactus'
const contactUsController = require('../controllers/contactus');





router.get('/',contactUsController.contactGetController);
  
router.post('/success',contactUsController.contactPostController);

module.exports= router;
