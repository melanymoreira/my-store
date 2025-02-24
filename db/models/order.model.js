const { Sequelize, Model, DataTypes } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model');
const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'customers_id',
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.literal('NOW()'),
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsToMany(models.Customer, { as: 'customers' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}

module.exports = { ORDER_TABLE, Order, OrderSchema };
