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