const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const signUp_login = require('./Routes/signUp_login'); 
const dotenv = require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://siddhantd2000:Sig6psz7GqR3sO3A@userdetails.oswl47q.mongodb.net/?retryWrites=true&w=majority&appName=userDetails';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.get('/', (req,res)=>{
    res.send("Server Stated Successfully")
});

app.use('/users',signUp_login)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
