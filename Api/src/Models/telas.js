const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "tela",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      imagen: {
        type: DataTypes.STRING(1500),
        allowNull: false,
        unique: true,
        validate: {
          isUrl: {
            msg: "la imagen debe estar en formato URL",
          },
        },
      },
    },
    { timestamps: false }
  );
};
