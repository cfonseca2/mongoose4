var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:MpRQOYlVVjB7ESUL@cluster0-tpntb.mongodb.net/libros?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
// tu código aquí
var lib= Libro({
  isbn: "9788425223280",
  titulo: "Ecología",
  autor:{
    paterno: "Pérez",
    materno: "Toledo",
    nombre: "Víctor"
  }
});

  lib.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function nuevosLibros() {

  var libros=[
    { isbn: "1111111111111",titulo:"El gato con botas",autor: {paterno: "Hernandez", materno: "López", nombre: "José" }},
    { isbn: "2222222222222",titulo:"Bandidos de río frío",autor: {paterno: "Rulfo", materno: "--", nombre: "Juan" }},
    { isbn: "3333333333333",titulo:"Esbozo de historia universal",autor: {paterno: "Brom", materno: "--", nombre: "Juan" }},
    { isbn: "4444444444444",titulo:"Los topos",autor: {paterno: "Hernandez", materno: "Cabrera", nombre: "Arturo" }},
    { isbn: "5555555555555",titulo:"Historia mínima de México",autor: {paterno: "Pérez", materno: "Estrada", nombre: "Víctor" }},
    { isbn: "6666666666666",titulo:"Marianela",autor: {paterno: "Gómez", materno: "López", nombre: "Alberto" }},
    { isbn: "7777777777777",titulo:"Los tres mosqueteros",autor: {paterno: "Estrella", materno: "Martínez", nombre: "Ricardo" }},
    { isbn: "8888888888888",titulo:"El conde Lucanor",autor: {paterno: "Higareda", materno: "Trujillo", nombre: "Diego" }},
    { isbn: "9999999999999",titulo:"Hamlet",autor: {paterno: "Shakespeare", materno: "--", nombre: "William" }},
    { isbn: "0000000000000",titulo:"Romeo y Julieta",autor: {paterno: "Shakespeare", materno: "--", nombre: "William" }},
  ];

  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function buscarByIsbn(isbn){

    Libro.find({isbn:isbn},function(err,documentos){
      console.log(documentos);
    });
}

function modificarTituloByIsbn(isbn, nuevoTitulo){

Libro.findOneAndUpdate({isbn:isbn},
    {'titulo':nuevoTitulo},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
//  nuevoLibro();
//  nuevosLibros();
//  buscarByIsbn(1111111111111);
  modificarTituloByIsbn(1111111111111, "El Cid Campeador");
}

main();    // ejecutamos main
