var express = require('express');
var router = express.Router();
let productCtrl = require('../controllers/products.js')

/* GET products listing. */
router.get('/', productCtrl.index);

// task 4 hint 1 - a route handler that just spits back whatever product id the user requests
// router.get('/:id', function(req,res,next) {
//     res.send("you requested product id " + req.params.id)
// })

// task 4 hint 2 and hint 3 - same as hint 1, but now moved into controller show function.
// see controllers/products.js for the rest.
router.get('/:id', productCtrl.show)

module.exports = router;
