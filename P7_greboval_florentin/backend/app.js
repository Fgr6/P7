const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/user');
const actuRoutes = require('./routes/actu');
require('dotenv').config();
const url = process.env.REACT_APP_URL;

var cors = require('cors');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use('/api/auth', userRoutes);
app.use('/api/actu', actuRoutes);


module.exports = app;
