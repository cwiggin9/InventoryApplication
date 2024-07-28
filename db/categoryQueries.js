const pool = require("./pool");

async function addNewCategory(name) {
  await pool.query("INSERT INTO product_categories (name) VALUES ($1)", [name]);
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM product_categories");
  return rows;
}

async function deleteCategoryById(categoryId) {
  await pool.query("DELETE FROM product_categories WHERE id = $1", [
    categoryId,
  ]);
}

module.exports = {
  addNewCategory,
  getAllCategories,
  deleteCategoryById,
};
