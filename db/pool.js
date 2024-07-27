const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: "postgresql://postgres:123@localhost:5432/store_inventory",
});
