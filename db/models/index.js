const { User, UserSchema } = require('./user.model');

function initModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = { initModels };
