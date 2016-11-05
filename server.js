'use strict'


const express = require('express');
const app = express();
const http = require('http');

const cors = require("cors");
const evts = require('./events.json');

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");  
  next();      
});


let getEvents = () => {
    app.get('/events', function(req,res){
            res.send(evts);
            console.log(evts);
    });
    console.log("GET EVENTS");
}

let startServer = () => {
    var port = process.env.port || 3636
    app.listen(port);
    console.log('Server is running on port ' + port);
}


startServer();
getEvents(evts);

