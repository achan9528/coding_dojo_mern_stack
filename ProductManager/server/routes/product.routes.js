const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    app.put("/api/products/update/:id", ProductController.updateExistingProduct);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);
};