'use strict'
const validcpf = require('validar-cpf');
const petModel = require('./../config/models/pet.model').model;
const authService = {
    async  create(body){
        try {
            const pet = new petModel({
                ownerName: body.ownerName,
                ownerCpf: body.ownerCpf,
                petName: body.petName,
                breedDog: body.breedDog,
                yearBirth: body.yearBirth,
                img: body.img
            });

            const cpf = await petModel.findOne({ownerCpf: body.ownerCpf});

            if(cpf){
                throw new Error('CPF already exist!');
            }
            if (body.ownerCpf == "11111111111" || body.ownerCpf == "22222222222" ||
                body.ownerCpf == "33333333333" || body.ownerCpf == "44444444444" ||
                body.ownerCpf == "55555555555" || body.ownerCpf == "66666666666" ||
                body.ownerCpf == "77777777777" || body.ownerCpf == "88888888888" ||
                body.ownerCpf == "99999999999" || body.ownerCpf == "00000000000") {

                throw new Error('Invalid Cpf');
            }

            if (validcpf(body.ownerCpf) == false) {
                throw new Error('Invalid Cpf');
            }

            const saved = await pet.save();

            return saved;
            
        } catch (err) {
            throw new Error(err);
        }
    },

    async getAll(){
        try {
            return await petModel.find({});
        } catch (err) {
            throw new Error(err);
        }
    },

    async getById(_id){
        try {
            const pet = await petModel.findById({_id});
            if(!pet){
                throw new Error('pet not found!');
            }else{
                return pet;
            }
        } catch (error) {
            throw new Error(error);
        }
    },

    async updatePet(_id, body){
        try {
            return await petModel.findByIdAndUpdate(
                {_id},
                {$set: body},
                { new: true})
        } catch (error) {
            throw new Error(error);
        }
    }


}

module.exports = {authService }