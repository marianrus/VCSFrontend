// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/projects/ProjectsView',
  'views/contributors/ContributorsView',
  'views/repositories/RepositoriesView',
  'views/repositories/repository/RepositoryView',
  'models/repository/RepositoryModel',
  'views/footer/FooterView',
  'views/repositories/RepositoryBranchesView',
  'views/repositories/RepositoriesContributorsView'
], function(
    $,
    _,
    Backbone,
    HomeView,
    ProjectsView,
    ContributorsView,
    RepositoriesView,
    RepositoryView,
    RepositoryModel,
    FooterView,
    RepositoriesBranchesView,
    RepositoriesContributorsView
    ) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showContributors',
      'repositories': 'showRepositories',
      'repositories/:owner/:repositoryName': 'showRepository',
      'repositories-branches/:owner/:repositoryName': 'showRepositoryBranches',
      'repositories-contributors/:owner/:repositoryName': 'showRepositoryContributors',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showProjects', function(){
   
        // Call render on the module we loaded in via the dependency array
        var projectsView = new ProjectsView();
        projectsView.render();

    });

    app_router.on('route:showContributors', function () {
        // Like above, call render but know that this view has nested sub views which
        // handle loading and displaying data from the GitHub API  
        var contributorsView = new ContributorsView();
    });

    app_router.on('route:showRepositories', function () {debugger;
        // Like above, call render but know that this view has nested sub views which
        // handle loading and displaying data from the GitHub API
        var repositoriesView = new RepositoriesView();
        // repositoriesView.render();
    });

    app_router.on('route:showRepositoryBranches', function (owner, repositoryName) {debugger;
        var fullName =  owner + '/' + repositoryName;
        new RepositoriesBranchesView( {
            model: new RepositoryModel({'full_name' : fullName})
        });
    });

    app_router.on('route:showRepositoryContributors', function (owner, repositoryName) {debugger;
        var fullName =  owner + '/' + repositoryName;
        new RepositoriesContributorsView( {
            model: new RepositoryModel({'full_name' : fullName})
        });
    });
    app_router.on('route:showRepository', function (owner, repositoryName) {debugger;
        // Like above, call render but know that this view has nested sub views which
        // handle loading and displaying data from the GitHub API
        var fullName =  owner + '/' + repositoryName;
        var repositoriesView = new RepositoryView(
            {
                model: new RepositoryModel({'full_name' : fullName})
            }
        );
        // repositoriesView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
