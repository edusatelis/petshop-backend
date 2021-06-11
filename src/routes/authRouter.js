const express = require('express');
const AuthSrv = require('./../Auth/index');
const AuthRouter = express.Router();


AuthRouter.post('/register', AuthSrv.register);
AuthRouter.get('/pets', AuthSrv.getAllPets);
AuthRouter.get('/pets/:id', AuthSrv.getPet);
AuthRouter.put('/pets/:id', AuthSrv.updatePet);



module.exports = { AuthRouter }