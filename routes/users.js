var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var nombre = req.query.nombre || '';
  var response = '';

  if (!nombre) {
    response = 'No ingreso ningun nombre';
    res.status(404);
    res.send(response);
  } else {
    response = 'Hola ' + nombre;
    res.status(200);
    res.send(response);
  }
});

module.exports = router;
