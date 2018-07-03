define([
  'jquery',
  'underscore',
  'backbone',
  'collections/repositories/RepositoriesCollection',
  'text!templates/repositories/repositoriesListTemplate.html',
  'views/repositories/RegisterRepositoryView'
], function($, _, Backbone, RepositoriesCollection, repositoriesListTemplate, RegisterRepositoryView){
  
  var RepositoriesListView = Backbone.View.extend({

    goldContributors : [],
    silverContributors : [],
    bronzeContributors : [],

    el : $("#repositories-list"),
    tagName:"ul",
    
    initialize : function() {
     debugger;
      var that = this;
      // that.bind("reset", that.clearView);
    },

    render : function() {
        var that = this;

        $('#repositories-list').hide();
        var repositoryList = _.template( repositoriesListTemplate, {
            repositories: that.collection.models
        });

        debugger;


        $("#page").html( repositoryList);
        var repositoryRegister = new RegisterRepositoryView();

         repositoryRegister.render();
         return this;
      }
  });

  return RepositoriesListView;
});
