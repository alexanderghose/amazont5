let products = ["lg big screen tv", "iphone x", "bose bluetooth earbuds"]

function getProducts() {
    return products
}

// for task 4 hint 3 - display the array element corresponding to the product id to the user.
function getProductById(product_id) {
    return products[product_id]
}

// exporting my getProducts function so that other files can access it. 
// Note that when exporting functions we don't do getProducts() because that would execute the function. So: Just the name
module.exports = {
    getProducts: getProducts,
    getProductById: getProductById // for task 4 hint 3
}