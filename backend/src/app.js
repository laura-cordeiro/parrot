const express = require("express"),
  app = express(),
  cors = require("cors"),
  db = require("./infrastructure/database"),
  routes = require("./routes");
  handleError = require("./middlewares/handleError")

db.hasConnection();
app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
