require('dotenv').config();
require('./config/connections/database');

const Routes = require('./routes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

Routes.init(app);

app.get('/', (req,res)=>{
    res.status(200).send('API v0.0.1');
});

app.listen(PORT, ()=>{
    console.log(`Backend is running in port ${PORT}`)
});