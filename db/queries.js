const pool = require("./pool");

async function addNewProduct(name, price, quantity) {
  const query =
    "INSERT INTO products (name, price, quantity) VALUES ($1, $2, $3)";
  await pool.query(query, [name, price, quantity]);
}

async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}

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
  addNewProduct,
  getAllProducts,
  addNewCategory,
  getAllCategories,
  deleteCategoryById,
};
