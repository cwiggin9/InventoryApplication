require("dotenv").config();
const express = require("express");
const app = express();
const productsRouter = require("./routes/productsRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const { getProductsByCategory, getAllCategories } = require("./db/categoryQueries");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.get("/", async (req, res) => {
  try {
    const selectedCategory = req.query.category || "";
    const categories = await getAllCategories();
    const products = await getProductsByCategory(selectedCategory);
    res.render("index", { products, categories, selectedCategory });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
