define([
  'jquery',
  'underscore',
  'backbone',
  'views/contributors/ContributorsListView',
  'Repo'
  'text!templates/contributors/contributorsTemplate.html'
], function($, _, Backbone, ContributorsListView, contributorsTemplate){

  //var contributorsListView;

  var RepositoriesView = Backbone.View.extend({
    
    el: $("#page"),

    initialize:function() {

      var that = this;

      var onDataHandler = function(collection) {
          that.render();
      }

      that.collection = new RepositoriesView([]);
      that.collection.fetch({ success : onDataHandler, dataType: "jsonp" });

    },

    render: function(){

      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
debugger;
      var total_contributions = this.getTotalContributions(this.collection.models);
      var total_contributors = this.collection.models.length;  
    
      var data = { total_contributions : total_contributions, 
                  total_contributors : total_contributors}; 

      // main view  
      var compiledTemplate = _.template( contributorsTemplate, data );
      this.$el.html( compiledTemplate ); 

      // sub view 
      var contributorsListView = new ContributorsListView({ collection: this.collection}); 
      contributorsListView.render();

    },

    getTotalContributions:function( aModels ){

      var total = 0;
      
      _.each(aModels, function(contributorModel) { 
         var contributorContributions = Number ( contributorModel.get("contributions") );
         total += contributorContributions; 
      });

      return total; 
    },

    clearListView: function() {
      console.log("clearing sub view");
      contributorsListView.clearListView();
    }



  });
  return RepositoriesView;
});
