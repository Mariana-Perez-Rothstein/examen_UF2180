// primero requerimos librerias

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

//creamos nuestra constante para crear el servidor

const server = express();

//consifuracion cors
server.use(cors());
server.use(express.json());

//creamos la conexion

// ruta con post para q insertar las contraseñas en la bbdd

server.post("/insertar", (req, res) => {
    const password = req.body.password;
    let conexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "UF2180"
      });
    
conexion.connect(err => {
        if (err) {
          res.json('Error en la conexion MySQL: ' + err);
        } else {
          const query = "insert into Usuari values (default, '" + password + "');";

          conexion.query(query, err => {
            if (err) {
              res.json('Error en la insercion de la contrasenya: ' + err);
            } else {
              res.json('Contrasenya insertada correctamente!');
            }
          });
        }
      });
    });
    
      server.listen(3000, () => {
        console.log("Servidor OK!!!");
        });
        