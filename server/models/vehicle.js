const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("vehicle-booking", "root", null, {
  dialect: 'mysql',
  host: 'localhost'
});

// Define your model
module.exports =  (sequelize) => {
const Vehicle = sequelize.define('vehicle', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  number_plate: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  company: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wheels: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
});
return Vehicle
}
