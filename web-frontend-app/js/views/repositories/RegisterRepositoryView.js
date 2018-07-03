define([
    'jquery',
    'underscore',
    'backbone',
    'collections/repositories/RepositoriesCollection',
    'views/repositories/RepositoryListView',
    'text!templates/repositories/repositoriesRegisterTemplate.html',
    'collections/repositories/GithubRepositoriesCollection',
    'models/repository/RegisterRepositoryModel'
], function ($,
             _,
             Backbone,
             RepositoriesCollection,
             RepositoryListView,
             registerRepositoryTemplate,
             GithubRepositoriesCollection,
             RegisterRepositoryModel
) {

    var RegisterRepositoryView = Backbone.View.extend({

        el: "#register-repository",

        initialize: function () {
            this.gitHubSearch = new GithubRepositoriesCollection()
        },

        // events: {
        //     "submit #searchText": "search",
        //     "keyup #searchText" : "search",
        //     "click #buy-button" : "search"
        // },

        events: {
            "click #register-repository": "submit",
            "keyup #searchText" : "search",
            "change #github-repos" : "change"
        },

        change: function(e){
            var name = $(e.currentTarget).find("option:selected").val();
            $("#searchText").val(name);
            debugger;
        },

        search: function () {
            var key = $('#searchText').val();

            if (key.length >=3) {
                console.log('search ' + key);
                this.gitHubSearch.findByName(key);
            }
        },

        submit: function(e){
            // e.preventDefault();
            debugger;
            var name = $("#searchText").val();
            var model = new RegisterRepositoryModel();
            model.save(
                {'name': name},
                {
                    success: function(model, response) {
                    debugger;
                    },
                    error: function(model, response) {
                      debugger;
                    },
                    complete: function(model, response) {
                      debugger;
                    },
                    wait: true
                }
            );
            debugger;
        },


        onFormSubmit:function(){
            debugger;
            e.preventDefault();
            var model = this.model;

            this.$el.find('input[name]').each(function() {
                model.set(this.name, this.value);
            })
            this.model.save();
        },

        render : function() {
            this.$el.append(_.template( registerRepositoryTemplate, {}));
            // var that = this;
            // var repositoryRegister = _.template( registerRepositoryTemplate, {});
            // $("#register-repository").html( repositoryRegister);
            return this;
        }
    });
    return RegisterRepositoryView;
});
