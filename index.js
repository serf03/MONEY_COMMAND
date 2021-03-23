const express = require('express');
const morgan = require('morgan');
const DB = require('./database');
const app = express();
const PORT = 3002;

//CONFIG
app.set('port',process.env.PORT || PORT)
//FUNCIONES
app.use(morgan('dev'));
app.use(express.json());
//RUTAS
app.use('/api/tareas', require('./routes/tareas'))
app.use('/api/user', require('./routes/user'))
//ARCHIVOS ESTATICOS
app.use(express.static(__dirname + '/public'));
//SERVIDOR
app.listen(app.get('port'), () => {
    console.log("SERVER ON PORT:", app.get('port'));
})
