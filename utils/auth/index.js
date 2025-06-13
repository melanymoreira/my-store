const passport = require("passport"); // Importa passport 
const LocalStrategy = require("./strategies/local-strategy"); // importa la estrategia local

passport.use(LocalStrategy);