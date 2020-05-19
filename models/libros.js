var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify',true);
var LibroSchema = Schema({
  isbn: String,
  titulo: String,
  autor:{
    paterno: String,
    materno: String,
    nombre: String
  }
});

module.exports = mongoose.model('Libro', LibroSchema);

// tu código aquí
