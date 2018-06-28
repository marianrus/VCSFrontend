define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var RepositoryModel = Backbone.Model.extend({

  	defaults : {
  		medalHex : '#A67D3D',
  		picWidth : '100px',
  		githubPath : 'concat github and login'
  	}

  });

  return RepositoryModel;

});
