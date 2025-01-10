const express = require('express') 
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const userroutes = require('./routes/routes')

// Initialize the app and set the port
const app = express()
const PORT = 8000;

// Middleware to parse JSON requests
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://jacob:jacob@mybd.mt95k.mongodb.net/?retryWrites=true&w=majority&appName=Mybd',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>{
    console.log("Db is connected sucessfully...!!!")
})
.catch(()=>{
    console.error("Some error is occured..!!!")
});

app.use('/users',userroutes);

app.get('/',(req,res)=>{
    res.send("Welcome to james jacob  backend session")
})

// Start the server
app.listen(PORT, () => {
    console.log('Welcome ..., Your server is running on PORT ${PORT}');
});

app.use('/',userroutes);