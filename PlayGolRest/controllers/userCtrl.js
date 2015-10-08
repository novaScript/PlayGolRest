//File: controllers/userCtrl.js
var mongoose = require('mongoose');
var User = mongoose.model('User');

//GET - Retorna todos los usuarios de la base de datos
exports.findAllUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) res.send(500, err.message);        
        console.log('GET /users')
        res.status(200).jsonp(users);
    });
};

//GET - Retorna un usuario del sistema por un ID especifico
exports.findUserById = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.send(500, err.message);        
        console.log('GET /user/' + req.params.id);
        res.status(200).jsonp(user);
    });
};

//POST - Inserta un nuevo usuario en la DB
exports.addUser = function (req, res) {
    console.log('POST');
    console.log(req.body);
    
    var user = new User({
        nombre:         req.body.nombre,
        apellido:       req.body.apellido,
        fecha_nac:      req.body.fecha_nac,
        sexo:           req.body.sexo,
        pais:           req.body.pais,
        departamento:   req.body.departamento,
        ciudad:         req.body.ciudad,
        password:       req.body.password
    });
    
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
        user.pais = req.body.pais;
        user.departamento = req.body.departamento;
        user.ciudad = req.body.ciudad;
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
            res.status(200);
        })
    });
};