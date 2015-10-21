/*
Fecha: Octubre 08 de 2015
Autor: David Alejandro Pineda Diaz
Tipo: Creacion
Descripcion: Control que maneja las consultas sobre el objeto datos de residencia
*/

//File: controllers/dataResidenceCtrl.js
var mongoose = require("mongoose");
var DataResidence = mongoose.model("data_residence");

//GET - Retorna todos los estados o departamentos de un pais
exports.findAllStates = function (req, res){
    DataResidence.aggregate([ 
        { $match: { pais: req.params.pais } },
        { $group: { _id: "$departamento", departamento: { $max: "$departamento" } } }
    ], function (err, states) {
        if (err) res.send(500, err.message);
        res.status(200).jsonp(states);
    });
}

//GET - Retorna todos las ciudades de un departamento
exports.findAllCitiesForStates = function (req, res) {
    DataResidence.find({
        pais: req.params.pais,
        departamento: req.params.departamento
    }, 'ciudad', function (err, cities) {
        if (err) res.send(500, err.message);
        res.status(200).jsonp(cities);
    });
}