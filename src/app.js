const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const device = require('express-device');
const app = express();
//const useRoutes = require('./routes/index');

//configuraciones
app.set('port',process.env.PORT || 3000);


//middleware  o configuraciones  intermedias
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(device.capture());


//rutas
app.get('/', (req, res)=>{
  console.log('dispositivo ' +req.device.type);
//console.log(req.device);
 res.send('respuesta del servidor');
})


//iniciar servidor
app.listen(app.get('port'), ()=>{
  console.log('servidor  en el puerto', app.get('port'));
});