define([
  'underscore',
  'backbone',
  'text!templates/repositories/repositoryTemplate.html',
  'models/repository/RepositoryModel'
], function(_, Backbone,  repositoryTemplate, RepositoryModel){
    
    var repositoryView = Backbone.View.extend({
        tagName : "li",
        initialize: function () {

            debugger;
            var that = this;
            var onDataHandler = function (collection) {
                that.render();
            };

            var onErrorHandler = function (collection, response, options) {
                debugger;
            };

            // that.model = new RepositoryModel([]);
            that.model.fetch({
                success: onDataHandler,
                error: onErrorHandler,
                complete: function (xhr, textStatus) {
                    debugger;
                    console.log(textStatus);
                },
                dataType: "json"
            });

        },

        render : function() {
            var that = this;
            var renderedTemplate = _.template(repositoryTemplate, {
                'model': that.model
            });
            $('#page').html(renderedTemplate);

           //  debugger;
           // var contributor = { avatar_url : this.model.get("avatar_url"),
           //                     login : this.model.get("login"),
           //                     url : this.model.get("url"),
           //                     contributions: this.model.get("contributions")};
           //
          //console.log("view created");
            
          /*
            var contributorTemplate = '<div class="contributor">' +
                            '<ul>' +
                                '<li>' +
                                '<img class="pic" width="100" src="<%= avatar_url %>">' +
                                '</li>' +
                                '<li>' +
                                    '<p class="blog"><a class="blogurl" href="<%= url %>"><%= login %></a></p>' +
                                '</li>' +
                                '<li>' +
                                    '<p class="contributions"><%= contributions %></p>' +
                                '</li>' +
                            '</ul>' + 
                        '</div>';
           
            //var contributorTemplate = $('#contributor-underscore-template').html(); hmmmmm???? 
                  
            var rendered_template = _.template(contributorTemplate, contributor);
            //console.log(rendered_template,contributor);
            
            $(this.el).append(rendered_template);
            */

            
            
           return this;
        }
        
    });

    return repositoryView;

}); 