const Strategy = require('passport-local');
const UserService = require('../../../services/user.service.js');
const boom = require('boom');
const bcrypt = require('bcrypt');

const userService = new UserService();
const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
},async (email, password, done) => {
  try {
    const user = await userService.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      done(boom.unauthorized(), false);
    }
    delete user.dataValues.password; // Eliminar la contraseña del objeto de usuario
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
