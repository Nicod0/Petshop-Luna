// db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "nombre-base-de-datos",
  "usuario",
  "contraseña",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

try {
  sequelize.authenticate();
  console.log("Conexión a la base de datos establecida correctamente.");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

module.exports = sequelize;
