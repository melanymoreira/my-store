const bcrypt = require('bcrypt');

const password = 'admin123'; // contraseña a verificar
// El hash de la contraseña almacenada en la base de datos
const hash = '$2b$10$Rbldbccd.QHoKW0Xf5aOL.LHRdIb503RcY/6IR1lBQt/DGcLAKM.u';

// Función para verificar la contraseña
async function verifyPassword() {
    const isMatch = await bcrypt.compare(password, hash); // Compara la contraseña ingresada con el hash almacenado
    console.log(isMatch); // true si la contraseña es correcta, false si no lo es
}

verifyPassword();