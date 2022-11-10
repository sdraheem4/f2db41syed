var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var kansas_controller = require('../controllers/kansas'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// kansas ROUTES /// 
 
// POST request for creating a kansas.  
router.post('/kansass', kansas_controller.kansas_create_post); 
 
// DELETE request to delete kansas. 
router.delete('/kansass/:id', kansas_controller.kansas_delete); 
 
// PUT request to update kansas. 
router.put('/kansass/:id', kansas_controller.kansas_update_put); 
 
// GET request for one kansas. 
router.get('/kansass/:id', kansas_controller.kansas_detail); 
 
// GET request for list of all kansas items. 
router.get('/kansass', kansas_controller.kansas_list); 
 
module.exports = router; 
 