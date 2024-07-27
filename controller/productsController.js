const db = require("../db/queries");

async function renderForm(req, res) {
  res.render("../views/form");
}

async function saveProductHandler(req, res) {
  const { name, price, quantity } = req.body;

  await db.addNewProduct(name, price, quantity);

  res.redirect("/");
}

module.exports = {
  renderForm,
  saveProductHandler,
};
