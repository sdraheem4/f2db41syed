var Kansas = require('../models/kansas'); 
 
// List of all Kansass 
exports.kansas_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Kansas list'); 
}; 
 
// for a specific Costume. 
exports.kansas_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Kansas.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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

// Handle Costume update form on PUT.
exports.kansas_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Kansas.findById( req.params.id)
 // Do updates of properties
 if(req.body.population)
 toUpdate.population = req.body.population;
 if(req.body.airports) toUpdate.airports = req.body.airports;
 if(req.body.outlets) toUpdate.outlets = req.body.outlets;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};