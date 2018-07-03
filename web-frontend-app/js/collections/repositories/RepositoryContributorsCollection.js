define([
  'underscore',
  'backbone',
  'models/repository/RepositoryModel'
], function(_, Backbone, RepositoryModel){

  var RepositoryBranchesCollection = Backbone.Collection.extend({

      model: RepositoryModel,

      initialize : function(models, options) {},

      url : function() {
          debugger;
          return apiUrl+'/analytics/repositories';
      },
  });

  return RepositoryBranchesCollection;

});