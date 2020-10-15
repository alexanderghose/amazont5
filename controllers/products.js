var ProductsModel = require('../models/products.js') // import from models/products.js file

function index(req, res) {
    let products = ProductsModel.getProducts() // execute a function from the imported file, store the result in a variable
    res.send('welcome to amazon. our productos are:' + products);
}

// task 4 hint 2 - spitting back whatever the user typed. 
// see routes/products.js to see this controller function in use.
// function show(req,res) {
//     res.send("you requested product id " + req.params.id)
// }

// task 4 hint 3 - rather than spit back the user requested id, we do a lookup on our array
// see models/products.js for details about the getProductById function and how it is exported.
function show(req,res) {
    let product = ProductsModel.getProductById(req.params.id)
    res.send("you requested product id " + req.params.id + " which is a " + product)
}

module.exports = {
    index: index, // export the "index" controller function
    show: show,
}