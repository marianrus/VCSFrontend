define([
    'underscore',
    'backbone',
    'models/repository/GitHubRepositoryModel',
    'text!templates/repositories/githubRepositoriesListTemplate.html'
], function (_, Backbone, RepositoryModel, githubRepositoriesListTemplate) {

    var GitHubRepositoriesCollection = Backbone.Collection.extend({

        el: "#github-repos",

        model: RepositoryModel,

        initialize: function (models, options) {
        },

        url: function () {
            return 'https://api.github.com/search/repositories?q=';
        },

        findByName(name) {
            var url = this.url() + name;
            $.ajax({
                url: url,
                headers: {
                    "Authorization":  btoa("t2a-project:licenta2017")
                },
                dataType: "json",
                success: function (data) {
                    $('#github-repos').html(_.template(githubRepositoriesListTemplate, {'repositories': data.items}));
                }
            });
        },

        render: function () {
            debugger;
            this.el.append(_.template(githubRepositoriesListTemplate, {'repositories': data.items}));
        }
    });

    return GitHubRepositoriesCollection;

});