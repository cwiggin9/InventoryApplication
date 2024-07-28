const db = require("../db/queries");

async function renderForm(req, res) {
  try {
    const categories = await db.getAllCategories();
    res.render("../views/addProductForm", { categories });
  } catch (error) {
    console.error("Error rendering form:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function saveProductHandler(req, res) {
  const { name, price, quantity, categoryId } = req.body;
  try {
    await db.addNewProduct(name, price, quantity, categoryId);
    res.redirect("/");
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function renderDeleteForm(req, res) {
  try {
    const products = await db.getAllProducts();
    res.render("../views/deleteProductForm", { products });
  } catch (error) {
    console.error("Error rendering delete form:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteProduct(req, res) {
  const { productId } = req.body;
  try {
    await db.deleteProductById(productId);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  renderForm,
  saveProductHandler,
  renderDeleteForm,
  deleteProduct,
};
