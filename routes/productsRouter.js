const { Router } = require("express");
const productsController = require("../controllers/productsController");
const productsRouter = Router();

productsRouter.get("/add", productsController.renderForm);
productsRouter.post("/add", productsController.saveProductHandler);
productsRouter.get("/delete", productsController.renderDeleteForm);
productsRouter.post("/delete", productsController.deleteProduct);

module.exports = productsRouter;
