const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "almohada",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [1, 200],
            msg: "el nombre debe tener entre 1 a 200 caracteres",
          },
        },
      },
      descripcion: {
        type: DataTypes.STRING(2000),
        allowNull: false,
        validate: {
          len: {
            args: [10, 2000],
            msg: "la descripción tiene que tener entre 10 y 2000 caracteres",
          },
        },
      },
      precio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tamaños: {
        type: DataTypes.STRING(2000),
        allowNull: false,
        validate: {
          len: {
            args: [1, 2000],
            msg: "la descripción tiene que tener entre 2 y 20 caracteres",
          },
        },
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
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
