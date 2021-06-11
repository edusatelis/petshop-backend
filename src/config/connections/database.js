require('dotenv').config();
const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const db = mongoose.connect(process.env.MONGO_URL, options, (err) =>{
    if(err)
    console.log(`I can't connect in MongoDB`);
    else
    console.log('MongoDB ::: Connected');
})

module.exports = { db } 