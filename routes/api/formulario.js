const express = require('express');
const router = express.Router();

//Controllers
const formularioApiController = require('../../controllers/api/formulario');

// To retrieve all the orders placed 
router.get('/', formularioApiController.showData); 

module.exports = router;