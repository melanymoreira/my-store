const passport = require('passport');
const LocalStrategy = require('./strategies/local-startgy');
passport.use(LocalStrategy);
