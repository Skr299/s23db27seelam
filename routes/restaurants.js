const express = require('express');
const router = express.Router();

// Sample data for restaurants
const restaurantsData = [
  { restaurant_name: 'Restaurant A', restaurant_type: 'Italian', address: '123 Main St', rating: 4.5 },
  { restaurant_name: 'Restaurant B', restaurant_type: 'Mexican', address: '456 Elm St', rating: 4.2 },
  { restaurant_name: 'Restaurant C', restaurant_type: 'Indian', address: '234 kcp St', rating: 4.9 },
  // Add more restaurant data here
];

router.get('/', (req, res) => {
  // Render the 'restaurants' Pug template with the restaurant data
  res.render('restaurants', { title: 'Search Results - Restaurants', results: restaurantsData });

});

module.exports = router;
