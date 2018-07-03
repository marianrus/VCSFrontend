define([
  'underscore',
  'backbone',
  'models/repository/GitHubRepositoryModel',
  'text!templates/repositories/githubRepositoriesListTemplate.html'
], function(_, Backbone, RepositoryModel, githubRepositoriesListTemplate){

  var GitHubRepositoriesCollection = Backbone.Collection.extend({

      el: "#github-repos",

      model: RepositoryModel,

      initialize : function(models, options) {},

      url : function() {
          return 'https://api.github.com/search/repositories?q=';
      },

     findByName(name){
          debugger;

          var that = this;
          var url = this.url() + name;
         $.ajax({
             url:url,
             dataType:"json",
             success:function (data) {
                 // that.render();
                 $('#github-repos').append(_.template(githubRepositoriesListTemplate, {'repositories': data.items}));
             }
         });
     },

     render: function(){
          debugger;
         this.el.append(_.template(githubRepositoriesListTemplate, {'repositories': data.items}));
     }
  });

  return GitHubRepositoriesCollection;

});