require('dotenv').config();
const authSrv = require('./service').authService;

async function register(req,res){
    try {
        const signup = await authSrv.create(req.body);
        if(signup)
            res.status(200).json(signup);
    } catch (error) {
            res.status(400).json(error.message);
        }
}


async function getAllPets(req,res){
    try {
        const getAll = await authSrv.getAll();
        if(getAll)
            res.status(200).json(getAll);
    } catch (error) {
            res.status(400).json(error.message);
    }
}

async function getPet(req, res){
    try {
        const getPet = await authSrv.getById(req.params.id);
        if(getPet)
            res.status(200).json(getPet);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

async function updatePet(req,res){
    try {
        const update = await authSrv.updatePet(req.params.id, req.body);
        if(update)
            res.status(200).json("Updated!!");
    } catch (error) {
            res.status(400).json(error.message);
    }
}


module.exports = {
    register,
    getAllPets,
    getPet,
    updatePet
}