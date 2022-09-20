const mongoose = require('mongoose');

//Connect to MongoDB
async function connect(){
    try {
        //await bất đồng bộ nên thêm async 
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };