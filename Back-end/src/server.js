const app= require('./app');
const connctDB = require('./config/config');


connctDB()

const Port= 5000; 
app.listen(Port ,()=>{
    console.log(`server is running port no is :${Port}`)
})