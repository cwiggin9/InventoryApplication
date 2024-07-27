const db = require("../db/queries");

async function renderForm(req, res) {
  res.render("../views/form");
}

async function saveCategoryHandler(req, res) {
  const { name, price, quantity } = req.body;

  await db.addNewCategory(name, price, quantity);

  res.redirect("/");
}

module.exports = {
  renderForm,
  saveCategoryHandler,
};
