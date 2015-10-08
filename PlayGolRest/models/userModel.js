/*
Fecha: Octubre 07 de 2015
Autor: David Alejandro Pineda Diaz
Tipo: Modificacion
Descripcion: Modelo que representa al objeto usuario
*/
exports = module.exports = function (app, mongoose) {
    
    var userSchema = new mongoose.Schema({
        nombre: { type: String },
        apellido: { type: String },
        fecha_nac: { type: Date },
        sexo: {
            type: String,
            enum: ['Masculino', 'Femenino']
        },
        pais: { type: String },
        departamento: { type: String },
        ciudad: { type: String },
        password: { type: String }
    });
    
    mongoose.model('User', userSchema);
};