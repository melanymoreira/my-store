import { Strategy } from "passport-local";
import UserService from "../../../services/user.service";
const boom = require ('boom'); // Importa boom para manejar errores

const userService = new UserService(); // Instancia del servicio de usuario
const LocalStrategy = new Strategy(async(userName, password, done) => {
    // Aquí iría la lógica para verificar el usuario y la contraseña
    try{
        const user = await userService.findByEmail(email);
        if (!user) {
            done(boom.unauthorized(), false);
        }
        
    }catch (error) {
        return done(error, false);
    }
});

module.exports = LocalStrategy;