'use strict'


const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');  

const events = {
    'destination_01' : 'singapore',
    'destination_02' : 'bangalore',
    'destination_03' : 'mumbai',
    'destination_04' : 'bangkok'
}


let getEvents = () => {
    app.get('/events', function(req,res){
            res.send(events);
            console.log(events);
    });
    console.log("GET EVENTS");
}

let startServer = () => {
    var port = process.env.port || 3636
    app.listen(port);
    console.log('Server is running on port ' + port);
}


startServer();
getEvents();
