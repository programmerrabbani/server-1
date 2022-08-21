const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const homeRoute = require('./routes/homeRoute');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const eventsRoute = require('./routes/eventsRoute');



// environment variable

const PORT = process.env.SERVER_PORT || 7777;

// init express

const app = express();

// data manage

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// static folder

app.use('/public' , express.static('public'));

// init routeing

app.use( homeRoute );
app.use( pageRoute );
app.use( courseRoute );
app.use( eventsRoute );

// server listen

app.listen(PORT , () => {

    console.log(`  SERVER IS RUNNING ON http://localhost:${PORT}  `.bgGreen.black);

});