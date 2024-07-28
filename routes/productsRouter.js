const { Router } = require("express");
const productsController = require("../controllers/productsController");
const productsRouter = Router();

productsRouter.get("/form", productsController.renderForm);
productsRouter.post("/add", productsController.saveProductHandler);

module.exports = productsRouter;
