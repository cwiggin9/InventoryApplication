const { Router } = require("express");
const categoriesController = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/add", categoriesController.renderAddForm);
categoriesRouter.post("/add", categoriesController.saveCategoryHandler);
categoriesRouter.get("/delete", categoriesController.renderDeleteForm);
categoriesRouter.post("/delete", categoriesController.deleteCategory);

module.exports = categoriesRouter;
