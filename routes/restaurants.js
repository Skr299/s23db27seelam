var express = require('express');
const restaurants_controlers= require('../controllers/restaurants');
var router = express.Router();
/* GET restaurantss */
router.get('/', restaurants_controlers.restaurants_view_all_Page );
router.get('/restaurants/:id', restaurants_controlers.restaurants_detail);
/* GET detail restaurants page */
router.get('/detail', restaurants_controlers.restaurants_view_one_Page);
/* GET create restaurants page */
router.get('/create', restaurants_controlers.restaurants_create_Page);
/* GET create update page */
router.get('/update', restaurants_controlers.restaurants_update_Page);
/* GET delete restaurants page */
router.get('/delete', restaurants_controlers.restaurants_delete_Page);
module.exports = router;

// const express = require('express');
// const router = express.Router();

// // Sample data for restaurants
// const restaurantsData = [
//   { restaurant_name: 'Restaurant A', restaurant_type: 'Italian', address: '123 Main St', rating: 4.5 },
//   { restaurant_name: 'Restaurant B', restaurant_type: 'Mexican', address: '456 Elm St', rating: 4.2 },
//   { restaurant_name: 'Restaurant C', restaurant_type: 'Indian', address: '234 kcp St', rating: 4.9 },
//   // Add more restaurant data here
// ];

// router.get('/', (req, res) => {
//   // Render the 'restaurants' Pug template with the restaurant data
//   res.render('restaurants', { title: 'Search Results - Restaurants', results: restaurantsData });

// });

// module.exports = router;