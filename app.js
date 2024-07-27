require("dotenv").config();
const express = require("express");
const app = express();
const productsRouter = require("./routes/productsRouter");
const categoriesRouter = require("./routes/categoriesRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.get("/", async (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
