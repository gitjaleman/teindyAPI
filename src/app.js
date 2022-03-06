const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();

//configuraciones
app.set('port',process.env.PORT || 3000);


//middleware  o configuraciones  intermedias
app.use(morgan('dev'));
app.use(bodyParser.json());



//iniciar servidor
app.listen(app.get('port'), ()=>{
  console.log('servidor corriendo en el puerto', app.get('port'));
});