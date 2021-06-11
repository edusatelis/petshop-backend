const express = require('express');
const AuthRouter =  require('./authRouter').AuthRouter;

function init(app) {

    const router = express.Router();

 
    /**
     * @description Todas as rotas sem autenticação
     * @constructs
     */
    app.use('/auth', AuthRouter);

    
    
    /**
     * @constructs all routes
     */
    app.use(router);
}


module.exports = { init }