/*
Fecha: Novuiembre 19 2015
Autor: Erwin Pantoja Eespana
Tipo: Creacion
Descripcion: Modelo que representa al objeto que contiene los equipos de futbol 
*/
exports = module.exports = function (app, mongoose) {
    var dataTeamSchema = new mongoose.Schema({
        nombre_team: { type : String },
        escudo_team: { type : String },
        pais : { type : String },
        departamento : { type : String },
        ciudad : { type : String },
        color_team : { type : String },
        jugadores : {
            jugador_1 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_2 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_3 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_4 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_5 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_6 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_7 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_8 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_9 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            },
            jugador_10 : {
                nombre: { type : String },
                apodo: { type : String },
                edad: { type : Number },
                foto: { type : String },
                direccion: { type : String },
                latitud: { type : String },
                longitud: { type : String },
                correo: { type : String },
                estadisticas : {
                    posicion: { type : String },
                    goles: { type : String }
                }
            }
        },
        estadisticas : {
            puntaje: { type : String },
            posicion: { type : String },
            numero_jugadores: { type : String },
            partidos_ganados: { type : String },
            partidos_perdidos: { type : String },
            partidos_empatados: { type : String },
        },
        estadio : {
            nombre_estadio : { type : String },
            latitud_estadio : { type : String },
            longitud_estadio : { type : String }
        }
    });
    
    mongoose.model('data_team', dataTeamSchema);
};