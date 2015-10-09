/*
Fecha: Octubre 08 de 2015
Autor: David Alejandro Pineda Diaz
Tipo: Creacion
Descripcion: Modelo que representa al objeto que contiene las ubicaciones mundiales
*/
exports = module.exports = function (app, mongoose) {
    var dataResidenceSchema = new mongoose.Schema({
        pais: { type : String },
        departamento: { type : String },
        ciudad : { type : String }
    });
    
    mongoose.model('data_residence', dataResidenceSchema);
};