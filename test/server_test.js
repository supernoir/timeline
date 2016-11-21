'use strict'

var expect = require('chai').expect;


describe('SERVER', function() {
    it('should listen on port 3636', function() {
        var server = require('../server.js');
        expect(server.startServer()).to.equal(3636);
    });
});


describe('API', function() {
   it('should GET all events', function(){
       var api = require('../server.js');
      expect(api.getEvents()).to.equal(true); 
   }); 
});