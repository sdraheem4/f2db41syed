// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('kansas', { title: 'Search Results' });
// });
// module.exports = router;


var express = require('express'); 
const kansas_controlers= require('../controllers/kansas'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', kansas_controlers.kansas_view_all_Page ); 
module.exports = router; 

/* GET detail costume page */ 
router.get('/detail', kansas_controlers.kansas_view_one_Page); 

/* GET create costume page */ 
router.get('/create', kansas_controlers.kansas_create_Page); 

/* GET create update page */ 
router.get('/update', kansas_controlers.kansas_update_Page); 

/* GET delete costume page */ 
router.get('/delete', kansas_controlers.kansas_delete_Page); 