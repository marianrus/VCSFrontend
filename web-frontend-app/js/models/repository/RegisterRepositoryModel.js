define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var RepositoryModel = Backbone.Model.extend({

      url : function() {
          return apiUrl + '/analytics/register/repository';
      }
  });

  return RepositoryModel;

});
