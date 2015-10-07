exports = module.exports = function (app, mongoose){

    var usuario = new mongoose.Schema({
        pais: { type: String },
        fecha_nac : { type: Date },

    })

}