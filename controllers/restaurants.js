var restaurants = require('../models/restaurants');
// List of all restaurants
exports.restaurants_list = function(req, res) {
 res.send('NOT IMPLEMENTED: restaurants list');
};
// for a specific restaurants.
exports.restaurants_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: restaurants detail: ' + req.params.id);
};
// Handle restaurants create on POST.
exports.restaurants_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: restaurants create POST');
};
// Handle restaurants delete form on DELETE.
exports.restaurants_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: restaurants delete DELETE ' + req.params.id);
};
// Handle restaurants update form on PUT.
exports.restaurants_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: restaurants update PUT' + req.params.id);
};

// List of all restaurantss
exports.restaurants_list = async function(req, res) {
    try{
    therestaurantss = await restaurants.find();
    res.send(therestaurantss);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }

   // VIEWS
// Handle a show all view
exports.restaurants_view_all_Page = async function(req, res) {
    try{
    therestaurants = await restaurants.find();
    res.render('restaurants', { title: 'restaurants Search Results', results: therestaurants });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   

   // Handle restaurants create on POST.
exports.restaurants_create_post = async function(req, res) {
    console.log(req.body)
    let document = new restaurants();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"restaurants_type":"goat", "cost":12, "size":"large"}
    document.restaurants_type = req.body.restaurants_type;
    document.address = req.body.address;
    document.rating = req.body.rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

exports.restaurants_detail = async function(req, res) {
 console.log("detail" + req.params.id)
 try {
 result = await restaurants.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};

// Handle restaurant update form on PUT.
exports.restaurants_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await restaurants.findById( req.params.id)
    // Do updates of properties
    if(req.body.restaurants_type) 
    toUpdate.restaurants_type = req.body.restaurants_type;
    if(req.body.address) toUpdate.address = req.body.address;
    if(req.body.rating) toUpdate.rating = req.body.rating;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
   };

   // Handle restaurants delete on DELETE.
exports.restaurants_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await restaurants.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.restaurants_view_one_Page = async function(req, res) {
 console.log("single view for id " + req.query.id)
 try{
 result = await restaurants.findById( req.query.id)
 res.render('restaurantsdetail', 
{ title: 'restaurants Detail', toShow: result });
 }
 catch(err){
 res.status(500)
 res.send(`{'error': '${err}'}`);
 }
};
   
// Handle building the view for creating a restaurants.
// No body, no in path parameter, no query.
// Does not need to be async
exports.restaurants_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('restaurantscreate', { title: 'restaurants Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


// Handle building the view for updating a restaurants.
// query provides the id
exports.restaurants_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await restaurants.findById(req.query.id)
    res.render('restaurantsupdate', { title: 'restaurants Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle a delete one view with id from query
exports.restaurants_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await restaurants.findById(req.query.id)
    res.render('restaurantsdelete', { title: 'restaurants Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };