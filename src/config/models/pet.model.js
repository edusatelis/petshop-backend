const mongoose = require('mongoose');


const petModel = new mongoose.Schema({
    ownerName: {type: String, required: true},
    ownerCpf: { type: String, required: true },
    petName: { type: String, required: true },
    breedDog: {type: String, required: true },
    yearBirth: {type: String, required:true},
    img: {type: String}
},{
    timestamps: true
});

const model = mongoose.model('pets', petModel);
module.exports = { model }