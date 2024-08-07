const pool = require("./pool");

async function addNewProduct(name, price, quantity, categoryId) {
  const query = `
    INSERT INTO products (name, price, quantity, product_categories_id)
    VALUES ($1, $2, $3, $4)
  `;
  await pool.query(query, [name, price, quantity, categoryId]);
}

async function deleteProductById(productId) {
  await pool.query("DELETE FROM products WHERE id = $1", [productId]);
}

async function getAllProducts() {
  const query = `
    SELECT 
      products.id, 
      products.name, 
      products.price, 
      products.quantity, 
      product_categories.name AS category_name
    FROM 
      products
    LEFT JOIN 
      product_categories 
    ON 
      products.product_categories_id = product_categories.id
  `;
  const { rows } = await pool.query(query);
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM product_categories");
  return rows;
}

module.exports = {
  addNewProduct,
  deleteProductById,
  getAllProducts,
  getAllCategories,
};
