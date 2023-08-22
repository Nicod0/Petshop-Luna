// db.js
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/petshop`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

try {
  sequelize.authenticate();
  console.log("Conexión a la base de datos establecida correctamente.");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

module.exports = sequelize;
