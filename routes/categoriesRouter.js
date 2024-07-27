const { Router } = require("express");
const categoriesController = require("../controller/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/form", categoriesController.renderForm);
categoriesRouter.post("/add", categoriesController.saveCategoryHandler);

module.exports = categoriesRouter;
