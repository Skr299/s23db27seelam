var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var restaurants_controller = require('../controllers/restaurants');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// restaurants ROUTES ///
// POST request for creating a restaurants. 
router.post('/restaurants', restaurants_controller.restaurants_create_post);
// DELETE request to delete restaurants.
router.delete('/restaurants/:id', restaurants_controller.restaurants_delete);
// PUT request to update restaurants.
router.put('/restaurants/:id', restaurants_controller.restaurants_update_put);
// GET request for one restaurants.
router.get('/restaurants/:id', restaurants_controller.restaurants_detail);
// GET request for list of all restaurants items.
router.get('/restaurants', restaurants_controller.restaurants_list);
module.exports = router;