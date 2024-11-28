var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
const port = process.env.PORT || 4000;



var homepageController = function(req,res){
  res.render('index', {title:'Express'});
};


/* GET home page. */
router.get('/', homepageController); 
  

module.exports = router;
