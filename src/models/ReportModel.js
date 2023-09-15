const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Report', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ethnicity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hair_style: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hair_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eyes_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    clothes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular_signs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    court_order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'accepted'),
      defaultValue: 'pending',
    },
    date: {
      type: DataTypes.DATEONLY, // TODO: check if this works with postgres
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
  }, { freezeTableName: true,}); // Para mantener el nombre tal como lo definimos en la BD utilizando sequelize.
};
