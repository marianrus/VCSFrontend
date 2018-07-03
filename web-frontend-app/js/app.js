// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){

    apiUrl = 'http://ec2-18-195-119-11.eu-central-1.compute.amazonaws.com:7777';

    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
