const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect= () =>{

    mongoose.connect(process.env.DATABASE_URL, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));}

module.exports = dbconnect;