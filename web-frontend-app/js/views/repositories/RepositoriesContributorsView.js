define([
  'jquery',
  'underscore',
  'backbone',
  'collections/repositories/RepositoryContributorsCollection',
  'text!templates/repositories/repositoriesContributorsTemplate.html'
], function($, _, Backbone, RepositoryBranchesCollection, contributorsTemplate){
  var RepositoryContributorsView = Backbone.View.extend({

    goldContributors : [],
    silverContributors : [],
    bronzeContributors : [],

    el : "#repositories-contributors-list",
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
          url: apiUrl+'/analytics/repositories/'+ that.model.get('full_name') + "/contributors",
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

            $('#repositories-contributors-list').hide();
        var repositoryList = _.template( contributorsTemplate, {
            contributors: that.collection.models
        });

        $("#page").html( repositoryList);
      }
  });

  return RepositoryContributorsView;
});
