const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./Routes/signUp_login'); 
const dotenv = require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/SignUp_SignIn';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.use('/', routes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
