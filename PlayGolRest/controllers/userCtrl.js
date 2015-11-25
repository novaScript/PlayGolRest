/*
Fecha: Octubre 07 de 2015
Autor: David Alejandro Pineda Diaz
Tipo: Creacion
Descripcion: Control que maneja el crud sobre el objeto User
*/

//File: controllers/userCtrl.js
var mongoose = require('mongoose');
var User = mongoose.model('user');

//GET - Retorna todos los usuarios de la base de datos
exports.findAllUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) res.send(500, err.message);        
        res.status(200).jsonp(users);
    });
};

//GET - Retorna un usuario del sistema por un ID especifico
exports.findUserById = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.send(500, err.message);        
        res.status(200).jsonp(user);
    });
};


//GET - Retorna un usuario del sistema por el nombre o apellido
exports.findUserByNameLastName = function (req, res) {
    User.find({
        $or : [{ "nombre" : new RegExp(req.params.option, 'i') }, 
            { "apellido" : new RegExp(req.params.option, 'i') }]
    }, function (err, user) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(user);
    });
};

//GET - Retorna un usuario del sistema por pais, departamento o ciudad
exports.findUserByCountryDepartCity = function (req, res) {
    User.find({
        $or : [{ "datos_residencia.pais" : new RegExp(req.params.option, 'i') }, 
            { "datos_residencia.departamento" : new RegExp(req.params.option, 'i') },
            { "datos_residencia.ciudad" : new RegExp(req.params.option, 'i') }]
    }, function (err, user) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(user);
    });
};

//POST - Inserta un nuevo usuario en la DB
exports.addUser = function (req, res) {
    /*var user = new User({
        nombre:         req.body.nombre,
        apellido:       req.body.apellido,
        fecha_nac:      req.body.fecha_nac,
        sexo:           req.body.sexo,
        datos_residencia: {
            pais: req.body.datos_residencia.pais,
            departamento: req.body.datos_residencia.departamento,
            ciudad: req.body.datos_residencia.ciudad
        },
        password:       req.body.password
    });*/
    
    var user = new User();
    
    user.nombre = req.body.nombre;
    user.apellido = req.body.apellido;
    user.fecha_nac = req.body.fecha_nac;
    user.sexo= req.body.sexo;
    user.datos_residencia.pais = req.body.datos_residencia.pais;
    user.datos_residencia.departamento = req.body.datos_residencia.departamento;
    user.datos_residencia.ciudad = req.body.datos_residencia.ciudad;
    user.password = req.body.password;

    user.save(function (err, user) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(user);
    });
};

//PUT - Actualiza el registro de un usuario existente
exports.updateUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        user.nombre = req.body.nombre;
        user.apellido = req.body.apellido;
        user.fecha_nac = req.body.fecha_nac;
        user.sexo = req.body.sexo;
        user.datos_residencia.pais = req.body.datos_residencia.pais;
        user.datos_residencia.departamento = req.body.datos_residencia.departamento;
        user.datos_residencia.ciudad = req.body.datos_residencia.ciudad;
        user.password = req.body.password;
        
        user.save(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(user);
        });
    });
};

//DELETE - Borra un usuario de la DB
exports.deleteUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        user.remove(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).send("OK");
        })
    });
};