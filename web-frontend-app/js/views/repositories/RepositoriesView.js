define([
    'jquery',
    'underscore',
    'backbone',
    'collections/repositories/RepositoriesCollection',
    'views/repositories/RepositoryListView',
    'text!templates/repositories/repositoriesTemplate.html'
], function ($, _, Backbone, RepositoriesCollection, RepositoryListView, repositoriesTemplate) {

    var RepositoriesView = Backbone.View.extend({

        el: $("#page"),

        initialize: function () {
            var that = this;
            var onDataHandler = function (collection) {
                that.render();
            };

            var onErrorHandler = function (collection, response, options) {
                debugger;
            };

            that.collection = new RepositoriesCollection([]);
            that.collection.fetch({
                success: onDataHandler,
                error: onErrorHandler,
                complete: function (xhr, textStatus) {
                    debugger;
                    console.log(textStatus);
                },
                dataType: "json"
            });

        },

        render: function () {
            $('.menu li').removeClass('active');
            $('.menu li a[href="' + window.location.hash + '"]').parent().addClass('active');
            var repositoryListView = new RepositoryListView({collection: this.collection});
            repositoryListView.render();
        }
    });
    return RepositoriesView;
});
