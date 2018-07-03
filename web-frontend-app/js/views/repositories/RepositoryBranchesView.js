define([
  'jquery',
  'underscore',
  'backbone',
  'collections/repositories/RepositoryBranchesCollection',
  'text!templates/repositories/repositoriesBranchesTemplate.html'
], function($, _, Backbone, RepositoryBranchesCollection, repositoriesBranchesListTemplate){
  
  var RepositoryBranchesView = Backbone.View.extend({

    goldContributors : [],
    silverContributors : [],
    bronzeContributors : [],

    el : "#repositories-branches-list",
    tagName:"td",

  initialize: function () {
        debugger;
      var that = this;
      var onDataHandler = function (collection) {
          that.render();
      };

      var onErrorHandler = function (collection, response, options) {
          debugger;
      };
      that.collection = new RepositoryBranchesCollection([]);
      that.collection.fetch({
          url: apiUrl+'/analytics/repositories/'+ that.model.get('full_name') + "/branches",
          success: onDataHandler,
          error: onErrorHandler,
          complete: function (xhr, textStatus) {
              console.log(textStatus);
          },
          dataType: "json"
      });

  },

    render : function() {
        debugger;
        var that = this;

        $('#repositories-branches-list').hide();
        var repositoryList = _.template( repositoriesBranchesListTemplate, {
            repositories: that.collection.models
        });

        $("#page").html( repositoryList);
      }
  });

  return RepositoryBranchesView;
});
