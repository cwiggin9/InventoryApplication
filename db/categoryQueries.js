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

async function getProductsByCategory(categoryId) {
  const query = `
      SELECT products.*, product_categories.name AS category_name
      FROM products
      LEFT JOIN product_categories ON products.product_categories_id = product_categories.id
      WHERE ($1::INTEGER IS NULL OR product_categories.id = $1)
  `;
  const { rows } = await pool.query(query, [
    categoryId ? parseInt(categoryId, 10) : null,
  ]);
  return rows;
}

module.exports = {
  addNewCategory,
  getAllCategories,
  deleteCategoryById,
  getProductsByCategory,
};
