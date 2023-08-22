// index.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});