const db = require("../db/queries");

async function renderAddForm(req, res) {
  try {
    res.render("../views/addCategoryForm");
  } catch (error) {
    console.error("Error rendering form:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function saveCategoryHandler(req, res) {
  const { name } = req.body;
  try {
    await db.addNewCategory(name);
    res.redirect("/");
  } catch (error) {
    console.error("Error saving category:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function renderDeleteForm(req, res) {
  try {
    const categories = await db.getAllCategories();
    res.render("../views/deleteCategoryForm", { categories });
  } catch (error) {
    console.error("Error rendering delete form:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteCategory(req, res) {
  const { categoryId } = req.body;
  try {
    await db.deleteCategoryById(categoryId);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  renderAddForm,
  saveCategoryHandler,
  renderDeleteForm,
  deleteCategory,
};
