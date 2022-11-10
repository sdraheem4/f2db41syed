var Kansas = require('../models/kansas'); 
 
// List of all Kansass 
exports.kansas_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Kansas list'); 
}; 
 
// for a specific Kansas. 
exports.kansas_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Kansas detail: ' + req.params.id); 
}; 
 
// Handle Kansas create on POST. 
exports.kansas_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Kansas create POST'); 
}; 
 
// Handle Kansas delete form on DELETE. 
exports.kansas_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Kansas delete DELETE ' + req.params.id); 
}; 
 
// Handle Kansas update form on PUT. 
exports.kansas_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Kansas update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.kansas_list = async function(req, res) { 
    try{ 
        theKansass = await Kansas.find(); 
        res.send(theKansass); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

// VIEWS 
// Handle a show all view 
exports.kansas_view_all_Page = async function(req, res) { 
    try{ 
        theKansass = await Kansas.find(); 
        res.render('kansas', { title: 'Kansas Search Results', results: theKansass }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.kansas_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Kansas(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.population = req.body.population; 
    document.airports = req.body.airports; 
    document.outlets = req.body.outlets; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 