var express = require('express');
const passport = require('passport');
const restaurants_controlers= require('../controllers/restaurants');
var router = express.Router();
/* GET restaurantss */
router.get('/', restaurants_controlers.restaurants_view_all_Page );
router.get('/restaurants/:id', restaurants_controlers.restaurants_detail);
// // A little function to check if we have an authorized user and continue on 
// or
// // redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

 router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
   
/* GET delete restaurants page */
router.get('/update', secured, restaurants_controlers.restaurants_update_Page);
router.get('/delete', secured, restaurants_controlers.restaurants_delete_Page);
router.get('/detail', secured, restaurants_controlers.restaurants_view_one_Page);
router.get('/create', secured, restaurants_controlers.restaurants_create_Page);
module.exports = router;