const mongoose = require('mongoose')

const connctDB= async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/crud')
        console.log('Db connected ')
    } catch (error) {
        console.log(error,'db is error')
    }
}
module.exports= connctDB;