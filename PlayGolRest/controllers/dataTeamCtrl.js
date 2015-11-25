/*
Fecha: Noviembre 19 9
Autor: Erwin Pantoja Espana
Tipo: Creacion
Descripcion: Control que maneja el crud sobre el objeto Team
*/

//File: controllers/dataTeamCtrl.js
var mongoose = require('mongoose');
var Team = mongoose.model('data_team');


//DELETE - Borra un equipo de la DB
exports.deleteTeam = function (req, res) {
    Team.findById(req.params.id, function (err, team) {
        team.remove(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).send("OK");
        })
    });
};

//GET - Retorna todos los equipos de la base de datos
exports.findAllTeam = function (req, res) {
    Team.find(function (err, team) {
        if (err) res.send(500, err.message);
        res.status(200).jsonp(team);
    });
};

//GET - Retorna un usuario del sistema por un ID especifico
exports.findAllTeamById = function (req, res) {
    Team.findById(req.params.id, function (err, team) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(team);
    });
};

//GET - Retorna un usuario del sistema por un nombre de equipo especifico
exports.findAllTeamByName = function (req, res) {
    Team.find({"nombre_team" : new RegExp(req.params.nombre_team, 'i')}, function (err, team) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(team);
    });
};

//GET - Retorna un usuario del sistema por un pais departamento o municipio especifico
exports.findAllTeamByCountryDepartCity = function (req, res) {
    Team.find({$or : [{"pais" : new RegExp(req.params.option, 'i') }, 
            { "departamento" : new RegExp(req.params.option, 'i') },
            { "ciudad" : new RegExp(req.params.option, 'i') }]
    }, function (err, team) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(team);
    });
};


//////////////////////////////////////////////////////////////////////////////////////

//POST - Inserta un nuevo equipo en la DB
exports.addTeam = function (req, res) {
    var team = new Team();
    team.nombre_team = req.body.nombre_team;
    team.escudo_team = req.body.escudo_team;
    team.pais = req.body.pais;
    
    team.departamento = req.body.departamento;
    team.ciudad = req.body.ciudad;
    team.color_team = req.body.color_team;

    if (req.body.jugadores != null) {
        if (req.body.jugadores.jugador_1 != null) {
            team.jugadores.jugador_1.id_jugador = req.body.jugadores.jugador_1.id_jugador;
            team.jugadores.jugador_1.nombre = req.body.jugadores.jugador_1.nombre;
            team.jugadores.jugador_1.apodo = req.body.jugadores.jugador_1.apodo;
            team.jugadores.jugador_1.edad = req.body.jugadores.jugador_1.edad;
            team.jugadores.jugador_1.foto = req.body.jugadores.jugador_1.foto;
            team.jugadores.jugador_1.direccion = req.body.jugadores.jugador_1.direccion;
            team.jugadores.jugador_1.latitud = req.body.jugadores.jugador_1.latitud;
            team.jugadores.jugador_1.longitud = req.body.jugadores.jugador_1.longitd;
            team.jugadores.jugador_1.correo = req.body.jugadores.jugador_1.correo;
            if (req.body.jugadores.jugador_1.estadisticas != null) {
                team.jugadores.jugador_1.estadisticas.posicion = req.body.jugadores.jugador_1.estadisticas.posicion;
                team.jugadores.jugador_1.estadisticas.goles = req.body.jugadores.jugador_1.estadisticas.goles;
            } else {
                team.jugadores.jugador_1.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_1 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_2 != null) {
            team.jugadores.jugador_2.id_jugador = req.body.jugadores.jugador_2.id_jugador;
            team.jugadores.jugador_2.nombre = req.body.jugadores.jugador_2.nombre;
            team.jugadores.jugador_2.apodo = req.body.jugadores.jugador_2.apodo;
            team.jugadores.jugador_2.edad = req.body.jugadores.jugador_2.edad;
            team.jugadores.jugador_2.foto = req.body.jugadores.jugador_2.foto;
            team.jugadores.jugador_2.direccion = req.body.jugadores.jugador_2.direccion;
            team.jugadores.jugador_2.latitud = req.body.jugadores.jugador_2.latitud;
            team.jugadores.jugador_2.longitud = req.body.jugadores.jugador_2.longitd;
            team.jugadores.jugador_2.correo = req.body.jugadores.jugador_2.correo;
            if (req.body.jugadores.jugador_2.estadisticas != null) {
                team.jugadores.jugador_2.estadisticas.posicion = req.body.jugadores.jugador_2.estadisticas.posicion;
                team.jugadores.jugador_2.estadisticas.goles = req.body.jugadores.jugador_2.estadisticas.goles;
            } else {
                team.jugadores.jugador_2.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_2 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_3 != null) {
            team.jugadores.jugador_3.id_jugador = req.body.jugadores.jugador_3.id_jugador;
            team.jugadores.jugador_3.nombre = req.body.jugadores.jugador_3.nombre;
            team.jugadores.jugador_3.apodo = req.body.jugadores.jugador_3.apodo;
            team.jugadores.jugador_3.edad = req.body.jugadores.jugador_3.edad;
            team.jugadores.jugador_3.foto = req.body.jugadores.jugador_3.foto;
            team.jugadores.jugador_3.direccion = req.body.jugadores.jugador_3.direccion;
            team.jugadores.jugador_3.latitud = req.body.jugadores.jugador_3.latitud;
            team.jugadores.jugador_3.longitud = req.body.jugadores.jugador_3.longitd;
            team.jugadores.jugador_3.correo = req.body.jugadores.jugador_3.correo;
            if (req.body.jugadores.jugador_3.estadisticas != null) {
                team.jugadores.jugador_3.estadisticas.posicion = req.body.jugadores.jugador_3.estadisticas.posicion;
                team.jugadores.jugador_3.estadisticas.goles = req.body.jugadores.jugador_3.estadisticas.goles;
            } else {
                team.jugadores.jugador_3.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_3 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_4 != null) {
            team.jugadores.jugador_4.id_jugador = req.body.jugadores.jugador_4.id_jugador;
            team.jugadores.jugador_4.nombre = req.body.jugadores.jugador_4.nombre;
            team.jugadores.jugador_4.apodo = req.body.jugadores.jugador_4.apodo;
            team.jugadores.jugador_4.edad = req.body.jugadores.jugador_4.edad;
            team.jugadores.jugador_4.foto = req.body.jugadores.jugador_4.foto;
            team.jugadores.jugador_4.direccion = req.body.jugadores.jugador_4.direccion;
            team.jugadores.jugador_4.latitud = req.body.jugadores.jugador_4.latitud;
            team.jugadores.jugador_4.longitud = req.body.jugadores.jugador_4.longitd;
            team.jugadores.jugador_4.correo = req.body.jugadores.jugador_4.correo;
            if (req.body.jugadores.jugador_4.estadisticas != null) {
                team.jugadores.jugador_4.estadisticas.posicion = req.body.jugadores.jugador_4.estadisticas.posicion;
                team.jugadores.jugador_4.estadisticas.goles = req.body.jugadores.jugador_4.estadisticas.goles;
            } else {
                team.jugadores.jugador_4.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_4 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_5 != null) {
            team.jugadores.jugador_5.id_jugador = req.body.jugadores.jugador_5.id_jugador;
            team.jugadores.jugador_5.nombre = req.body.jugadores.jugador_5.nombre;
            team.jugadores.jugador_5.apodo = req.body.jugadores.jugador_5.apodo;
            team.jugadores.jugador_5.edad = req.body.jugadores.jugador_5.edad;
            team.jugadores.jugador_5.foto = req.body.jugadores.jugador_5.foto;
            team.jugadores.jugador_5.direccion = req.body.jugadores.jugador_5.direccion;
            team.jugadores.jugador_5.latitud = req.body.jugadores.jugador_5.latitud;
            team.jugadores.jugador_5.longitud = req.body.jugadores.jugador_5.longitd;
            team.jugadores.jugador_5.correo = req.body.jugadores.jugador_5.correo;
            if (req.body.jugadores.jugador_5.estadisticas != null) {
                team.jugadores.jugador_5.estadisticas.posicion = req.body.jugadores.jugador_5.estadisticas.posicion;
                team.jugadores.jugador_5.estadisticas.goles = req.body.jugadores.jugador_5.estadisticas.goles;
            } else {
                team.jugadores.jugador_5.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_5 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_6 != null) {
            team.jugadores.jugador_6.id_jugador = req.body.jugadores.jugador_6.id_jugador;
            team.jugadores.jugador_6.nombre = req.body.jugadores.jugador_6.nombre;
            team.jugadores.jugador_6.apodo = req.body.jugadores.jugador_6.apodo;
            team.jugadores.jugador_6.edad = req.body.jugadores.jugador_6.edad;
            team.jugadores.jugador_6.foto = req.body.jugadores.jugador_6.foto;
            team.jugadores.jugador_6.direccion = req.body.jugadores.jugador_6.direccion;
            team.jugadores.jugador_6.latitud = req.body.jugadores.jugador_6.latitud;
            team.jugadores.jugador_6.longitud = req.body.jugadores.jugador_6.longitd;
            team.jugadores.jugador_6.correo = req.body.jugadores.jugador_6.correo;
            if (req.body.jugadores.jugador_6.estadisticas != null) {
                team.jugadores.jugador_6.estadisticas.posicion = req.body.jugadores.jugador_6.estadisticas.posicion;
                team.jugadores.jugador_6.estadisticas.goles = req.body.jugadores.jugador_6.estadisticas.goles;
            } else {
                team.jugadores.jugador_6.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_6 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_7 != null) {
            team.jugadores.jugador_7.id_jugador = req.body.jugadores.jugador_7.id_jugador;
            team.jugadores.jugador_7.nombre = req.body.jugadores.jugador_7.nombre;
            team.jugadores.jugador_7.apodo = req.body.jugadores.jugador_7.apodo;
            team.jugadores.jugador_7.edad = req.body.jugadores.jugador_7.edad;
            team.jugadores.jugador_7.foto = req.body.jugadores.jugador_7.foto;
            team.jugadores.jugador_7.direccion = req.body.jugadores.jugador_7.direccion;
            team.jugadores.jugador_7.latitud = req.body.jugadores.jugador_7.latitud;
            team.jugadores.jugador_7.longitud = req.body.jugadores.jugador_7.longitd;
            team.jugadores.jugador_7.correo = req.body.jugadores.jugador_7.correo;
            if (req.body.jugadores.jugador_7.estadisticas != null) {
                team.jugadores.jugador_7.estadisticas.posicion = req.body.jugadores.jugador_7.estadisticas.posicion;
                team.jugadores.jugador_7.estadisticas.goles = req.body.jugadores.jugador_7.estadisticas.goles;
            } else {
                team.jugadores.jugador_7.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_7 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_8 != null) {
            team.jugadores.jugador_8.id_jugador = req.body.jugadores.jugador_8.id_jugador;
            team.jugadores.jugador_8.nombre = req.body.jugadores.jugador_8.nombre;
            team.jugadores.jugador_8.apodo = req.body.jugadores.jugador_8.apodo;
            team.jugadores.jugador_8.edad = req.body.jugadores.jugador_8.edad;
            team.jugadores.jugador_8.foto = req.body.jugadores.jugador_8.foto;
            team.jugadores.jugador_8.direccion = req.body.jugadores.jugador_8.direccion;
            team.jugadores.jugador_8.latitud = req.body.jugadores.jugador_8.latitud;
            team.jugadores.jugador_8.longitud = req.body.jugadores.jugador_8.longitd;
            team.jugadores.jugador_8.correo = req.body.jugadores.jugador_8.correo;
            if (req.body.jugadores.jugador_8.estadisticas != null) {
                team.jugadores.jugador_8.estadisticas.posicion = req.body.jugadores.jugador_8.estadisticas.posicion;
                team.jugadores.jugador_8.estadisticas.goles = req.body.jugadores.jugador_8.estadisticas.goles;
            } else {
                team.jugadores.jugador_8.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_8 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_9 != null) {
            team.jugadores.jugador_9.id_jugador = req.body.jugadores.jugador_9.id_jugador;
            team.jugadores.jugador_9.nombre = req.body.jugadores.jugador_9.nombre;
            team.jugadores.jugador_9.apodo = req.body.jugadores.jugador_9.apodo;
            team.jugadores.jugador_9.edad = req.body.jugadores.jugador_9.edad;
            team.jugadores.jugador_9.foto = req.body.jugadores.jugador_9.foto;
            team.jugadores.jugador_9.direccion = req.body.jugadores.jugador_9.direccion;
            team.jugadores.jugador_9.latitud = req.body.jugadores.jugador_9.latitud;
            team.jugadores.jugador_9.longitud = req.body.jugadores.jugador_9.longitd;
            team.jugadores.jugador_9.correo = req.body.jugadores.jugador_9.correo;
            if (req.body.jugadores.jugador_9.estadisticas != null) {
                team.jugadores.jugador_9.estadisticas.posicion = req.body.jugadores.jugador_9.estadisticas.posicion;
                team.jugadores.jugador_9.estadisticas.goles = req.body.jugadores.jugador_9.estadisticas.goles;
            } else {
                team.jugadores.jugador_9.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_9 = undefined;
        }
        
        
        if (req.body.jugadores.jugador_10 != null) {
            team.jugadores.jugador_10.id_jugador = req.body.jugadores.jugador_10.id_jugador;
            team.jugadores.jugador_10.nombre = req.body.jugadores.jugador_10.nombre;
            team.jugadores.jugador_10.apodo = req.body.jugadores.jugador_10.apodo;
            team.jugadores.jugador_10.edad = req.body.jugadores.jugador_10.edad;
            team.jugadores.jugador_10.foto = req.body.jugadores.jugador_10.foto;
            team.jugadores.jugador_10.direccion = req.body.jugadores.jugador_10.direccion;
            team.jugadores.jugador_10.latitud = req.body.jugadores.jugador_10.latitud;
            team.jugadores.jugador_10.longitud = req.body.jugadores.jugador_10.longitd;
            team.jugadores.jugador_10.correo = req.body.jugadores.jugador_10.correo;
            if (req.body.jugadores.jugador_10.estadisticas != null) {
                team.jugadores.jugador_10.estadisticas.posicion = req.body.jugadores.jugador_10.estadisticas.posicion;
                team.jugadores.jugador_10.estadisticas.goles = req.body.jugadores.jugador_10.estadisticas.goles;
            } else {
                team.jugadores.jugador_10.estadisticas = undefined;
            }
        } else {
            team.jugadores.jugador_10 = undefined;
        }
    } else {
        team.jugadores = undefined;
    }
    
    if (req.body.estadisticas != null) {
        team.estadisticas.puntaje = req.body.estadisticas.puntaje;
        team.estadisticas.posicion = req.body.estadisticas.posicion;
        team.estadisticas.numero_jugadores = req.body.estadisticas.numero_jugadores;
        team.estadisticas.partidos_ganados = req.body.estadisticas.partidos_ganados;
        team.estadisticas.partidos_perdidos = req.body.estadisticas.partidos_perdidos;
        team.estadisticas.partidos_empatados = req.body.estadisticas.partidos_empatados;
    } else {
        team.estadisticas = undefined;
    }
    
    if (req.body.estadio != null) {
        team.estadio.nombre_estadio = req.body.estadio.nombre_estadio;
        team.estadio.latitud_estadio = req.body.estadio.latitud_estadio;
        team.estadio.longitud_estadio = req.body.estadio.longitud_estadio;
    } else {
        team.estadio = undefined;
    }
    
    
    team.save(function (err, team) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(team);
    });
};



//PUT - Actualiza el registro de un equipo existente
exports.updateTeam = function (req, res) {
    Team.findById(req.params.id, function (err, team) {
        
        team.nombre_team = req.body.nombre_team;
        team.escudo_team = req.body.escudo_team;
        team.pais = req.body.pais;
        team.departamento = req.body.departamento;
        team.ciudad = req.body.ciudad;
        team.color_team = req.body.color_team;
        
        if (req.body.jugadores != null) {
            if (req.body.jugadores.jugador_1 != null) {
                team.jugadores.jugador_1.id_jugador = req.body.jugadores.jugador_1.id_jugador;
                team.jugadores.jugador_1.nombre = req.body.jugadores.jugador_1.nombre;
                team.jugadores.jugador_1.apodo = req.body.jugadores.jugador_1.apodo;
                team.jugadores.jugador_1.edad = req.body.jugadores.jugador_1.edad;
                team.jugadores.jugador_1.foto = req.body.jugadores.jugador_1.foto;
                team.jugadores.jugador_1.direccion = req.body.jugadores.jugador_1.direccion;
                team.jugadores.jugador_1.latitud = req.body.jugadores.jugador_1.latitud;
                team.jugadores.jugador_1.longitud = req.body.jugadores.jugador_1.longitd;
                team.jugadores.jugador_1.correo = req.body.jugadores.jugador_1.correo;
                if (req.body.jugadores.jugador_1.estadisticas != null) {
                    team.jugadores.jugador_1.estadisticas.posicion = req.body.jugadores.jugador_1.estadisticas.posicion;
                    team.jugadores.jugador_1.estadisticas.goles = req.body.jugadores.jugador_1.estadisticas.goles;
                } else {
                    team.jugadores.jugador_1.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_1 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_2 != null) {
                team.jugadores.jugador_2.id_jugador = req.body.jugadores.jugador_2.id_jugador;
                team.jugadores.jugador_2.nombre = req.body.jugadores.jugador_2.nombre;
                team.jugadores.jugador_2.apodo = req.body.jugadores.jugador_2.apodo;
                team.jugadores.jugador_2.edad = req.body.jugadores.jugador_2.edad;
                team.jugadores.jugador_2.foto = req.body.jugadores.jugador_2.foto;
                team.jugadores.jugador_2.direccion = req.body.jugadores.jugador_2.direccion;
                team.jugadores.jugador_2.latitud = req.body.jugadores.jugador_2.latitud;
                team.jugadores.jugador_2.longitud = req.body.jugadores.jugador_2.longitd;
                team.jugadores.jugador_2.correo = req.body.jugadores.jugador_2.correo;
                if (req.body.jugadores.jugador_2.estadisticas != null) {
                    team.jugadores.jugador_2.estadisticas.posicion = req.body.jugadores.jugador_2.estadisticas.posicion;
                    team.jugadores.jugador_2.estadisticas.goles = req.body.jugadores.jugador_2.estadisticas.goles;
                } else {
                    team.jugadores.jugador_2.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_2 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_3 != null) {
                team.jugadores.jugador_3.id_jugador = req.body.jugadores.jugador_3.id_jugador;
                team.jugadores.jugador_3.nombre = req.body.jugadores.jugador_3.nombre;
                team.jugadores.jugador_3.apodo = req.body.jugadores.jugador_3.apodo;
                team.jugadores.jugador_3.edad = req.body.jugadores.jugador_3.edad;
                team.jugadores.jugador_3.foto = req.body.jugadores.jugador_3.foto;
                team.jugadores.jugador_3.direccion = req.body.jugadores.jugador_3.direccion;
                team.jugadores.jugador_3.latitud = req.body.jugadores.jugador_3.latitud;
                team.jugadores.jugador_3.longitud = req.body.jugadores.jugador_3.longitd;
                team.jugadores.jugador_3.correo = req.body.jugadores.jugador_3.correo;
                if (req.body.jugadores.jugador_3.estadisticas != null) {
                    team.jugadores.jugador_3.estadisticas.posicion = req.body.jugadores.jugador_3.estadisticas.posicion;
                    team.jugadores.jugador_3.estadisticas.goles = req.body.jugadores.jugador_3.estadisticas.goles;
                } else {
                    team.jugadores.jugador_3.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_3 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_4 != null) {
                team.jugadores.jugador_4.id_jugador = req.body.jugadores.jugador_4.id_jugador;
                team.jugadores.jugador_4.nombre = req.body.jugadores.jugador_4.nombre;
                team.jugadores.jugador_4.apodo = req.body.jugadores.jugador_4.apodo;
                team.jugadores.jugador_4.edad = req.body.jugadores.jugador_4.edad;
                team.jugadores.jugador_4.foto = req.body.jugadores.jugador_4.foto;
                team.jugadores.jugador_4.direccion = req.body.jugadores.jugador_4.direccion;
                team.jugadores.jugador_4.latitud = req.body.jugadores.jugador_4.latitud;
                team.jugadores.jugador_4.longitud = req.body.jugadores.jugador_4.longitd;
                team.jugadores.jugador_4.correo = req.body.jugadores.jugador_4.correo;
                if (req.body.jugadores.jugador_4.estadisticas != null) {
                    team.jugadores.jugador_4.estadisticas.posicion = req.body.jugadores.jugador_4.estadisticas.posicion;
                    team.jugadores.jugador_4.estadisticas.goles = req.body.jugadores.jugador_4.estadisticas.goles;
                } else {
                    team.jugadores.jugador_4.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_4 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_5 != null) {
                team.jugadores.jugador_5.id_jugador = req.body.jugadores.jugador_5.id_jugador;
                team.jugadores.jugador_5.nombre = req.body.jugadores.jugador_5.nombre;
                team.jugadores.jugador_5.apodo = req.body.jugadores.jugador_5.apodo;
                team.jugadores.jugador_5.edad = req.body.jugadores.jugador_5.edad;
                team.jugadores.jugador_5.foto = req.body.jugadores.jugador_5.foto;
                team.jugadores.jugador_5.direccion = req.body.jugadores.jugador_5.direccion;
                team.jugadores.jugador_5.latitud = req.body.jugadores.jugador_5.latitud;
                team.jugadores.jugador_5.longitud = req.body.jugadores.jugador_5.longitd;
                team.jugadores.jugador_5.correo = req.body.jugadores.jugador_5.correo;
                if (req.body.jugadores.jugador_5.estadisticas != null) {
                    team.jugadores.jugador_5.estadisticas.posicion = req.body.jugadores.jugador_5.estadisticas.posicion;
                    team.jugadores.jugador_5.estadisticas.goles = req.body.jugadores.jugador_5.estadisticas.goles;
                } else {
                    team.jugadores.jugador_5.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_5 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_6 != null) {
                team.jugadores.jugador_6.id_jugador = req.body.jugadores.jugador_6.id_jugador;
                team.jugadores.jugador_6.nombre = req.body.jugadores.jugador_6.nombre;
                team.jugadores.jugador_6.apodo = req.body.jugadores.jugador_6.apodo;
                team.jugadores.jugador_6.edad = req.body.jugadores.jugador_6.edad;
                team.jugadores.jugador_6.foto = req.body.jugadores.jugador_6.foto;
                team.jugadores.jugador_6.direccion = req.body.jugadores.jugador_6.direccion;
                team.jugadores.jugador_6.latitud = req.body.jugadores.jugador_6.latitud;
                team.jugadores.jugador_6.longitud = req.body.jugadores.jugador_6.longitd;
                team.jugadores.jugador_6.correo = req.body.jugadores.jugador_6.correo;
                if (req.body.jugadores.jugador_6.estadisticas != null) {
                    team.jugadores.jugador_6.estadisticas.posicion = req.body.jugadores.jugador_6.estadisticas.posicion;
                    team.jugadores.jugador_6.estadisticas.goles = req.body.jugadores.jugador_6.estadisticas.goles;
                } else {
                    team.jugadores.jugador_6.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_6 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_7 != null) {
                team.jugadores.jugador_7.id_jugador = req.body.jugadores.jugador_7.id_jugador;
                team.jugadores.jugador_7.nombre = req.body.jugadores.jugador_7.nombre;
                team.jugadores.jugador_7.apodo = req.body.jugadores.jugador_7.apodo;
                team.jugadores.jugador_7.edad = req.body.jugadores.jugador_7.edad;
                team.jugadores.jugador_7.foto = req.body.jugadores.jugador_7.foto;
                team.jugadores.jugador_7.direccion = req.body.jugadores.jugador_7.direccion;
                team.jugadores.jugador_7.latitud = req.body.jugadores.jugador_7.latitud;
                team.jugadores.jugador_7.longitud = req.body.jugadores.jugador_7.longitd;
                team.jugadores.jugador_7.correo = req.body.jugadores.jugador_7.correo;
                if (req.body.jugadores.jugador_7.estadisticas != null) {
                    team.jugadores.jugador_7.estadisticas.posicion = req.body.jugadores.jugador_7.estadisticas.posicion;
                    team.jugadores.jugador_7.estadisticas.goles = req.body.jugadores.jugador_7.estadisticas.goles;
                } else {
                    team.jugadores.jugador_7.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_7 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_8 != null) {
                team.jugadores.jugador_8.id_jugador = req.body.jugadores.jugador_8.id_jugador;
                team.jugadores.jugador_8.nombre = req.body.jugadores.jugador_8.nombre;
                team.jugadores.jugador_8.apodo = req.body.jugadores.jugador_8.apodo;
                team.jugadores.jugador_8.edad = req.body.jugadores.jugador_8.edad;
                team.jugadores.jugador_8.foto = req.body.jugadores.jugador_8.foto;
                team.jugadores.jugador_8.direccion = req.body.jugadores.jugador_8.direccion;
                team.jugadores.jugador_8.latitud = req.body.jugadores.jugador_8.latitud;
                team.jugadores.jugador_8.longitud = req.body.jugadores.jugador_8.longitd;
                team.jugadores.jugador_8.correo = req.body.jugadores.jugador_8.correo;
                if (req.body.jugadores.jugador_8.estadisticas != null) {
                    team.jugadores.jugador_8.estadisticas.posicion = req.body.jugadores.jugador_8.estadisticas.posicion;
                    team.jugadores.jugador_8.estadisticas.goles = req.body.jugadores.jugador_8.estadisticas.goles;
                } else {
                    team.jugadores.jugador_8.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_8 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_9 != null) {
                team.jugadores.jugador_9.id_jugador = req.body.jugadores.jugador_9.id_jugador;
                team.jugadores.jugador_9.nombre = req.body.jugadores.jugador_9.nombre;
                team.jugadores.jugador_9.apodo = req.body.jugadores.jugador_9.apodo;
                team.jugadores.jugador_9.edad = req.body.jugadores.jugador_9.edad;
                team.jugadores.jugador_9.foto = req.body.jugadores.jugador_9.foto;
                team.jugadores.jugador_9.direccion = req.body.jugadores.jugador_9.direccion;
                team.jugadores.jugador_9.latitud = req.body.jugadores.jugador_9.latitud;
                team.jugadores.jugador_9.longitud = req.body.jugadores.jugador_9.longitd;
                team.jugadores.jugador_9.correo = req.body.jugadores.jugador_9.correo;
                if (req.body.jugadores.jugador_9.estadisticas != null) {
                    team.jugadores.jugador_9.estadisticas.posicion = req.body.jugadores.jugador_9.estadisticas.posicion;
                    team.jugadores.jugador_9.estadisticas.goles = req.body.jugadores.jugador_9.estadisticas.goles;
                } else {
                    team.jugadores.jugador_9.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_9 = undefined;
            }
            
            
            if (req.body.jugadores.jugador_10 != null) {
                team.jugadores.jugador_10.id_jugador = req.body.jugadores.jugador_10.id_jugador;
                team.jugadores.jugador_10.nombre = req.body.jugadores.jugador_10.nombre;
                team.jugadores.jugador_10.apodo = req.body.jugadores.jugador_10.apodo;
                team.jugadores.jugador_10.edad = req.body.jugadores.jugador_10.edad;
                team.jugadores.jugador_10.foto = req.body.jugadores.jugador_10.foto;
                team.jugadores.jugador_10.direccion = req.body.jugadores.jugador_10.direccion;
                team.jugadores.jugador_10.latitud = req.body.jugadores.jugador_10.latitud;
                team.jugadores.jugador_10.longitud = req.body.jugadores.jugador_10.longitd;
                team.jugadores.jugador_10.correo = req.body.jugadores.jugador_10.correo;
                if (req.body.jugadores.jugador_10.estadisticas != null) {
                    team.jugadores.jugador_10.estadisticas.posicion = req.body.jugadores.jugador_10.estadisticas.posicion;
                    team.jugadores.jugador_10.estadisticas.goles = req.body.jugadores.jugador_10.estadisticas.goles;
                } else {
                    team.jugadores.jugador_10.estadisticas = undefined;
                }
            } else {
                team.jugadores.jugador_10 = undefined;
            }
        } else {
            team.jugadores = undefined;
        }
        
        if (req.body.estadisticas != null) {
            team.estadisticas.puntaje = req.body.estadisticas.puntaje;
            team.estadisticas.posicion = req.body.estadisticas.posicion;
            team.estadisticas.numero_jugadores = req.body.estadisticas.numero_jugadores;
            team.estadisticas.partidos_ganados = req.body.estadisticas.partidos_ganados;
            team.estadisticas.partidos_perdidos = req.body.estadisticas.partidos_perdidos;
            team.estadisticas.partidos_empatados = req.body.estadisticas.partidos_empatados;
        } else {
            team.estadisticas = undefined;
        }
        
        if (req.body.estadio != null) {
            team.estadio.nombre_estadio = req.body.estadio.nombre_estadio;
            team.estadio.latitud_estadio = req.body.estadio.latitud_estadio;
            team.estadio.longitud_estadio = req.body.estadio.longitud_estadio;
        } else {
            team.estadio = undefined;
        }

        team.save(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(team);
        });
    });

};


