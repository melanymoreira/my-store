const { User, UserSchema } = require('./user.model');
const { Customer, CustomersSchema } = require('./customer.model');

function initModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomersSchema, Customer.config(sequelize));
  Customer.associate(sequelize.models);
}

module.exports = initModels;
