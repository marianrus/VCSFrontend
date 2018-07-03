define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var RepositoryModel = Backbone.Model.extend({

      // url : function() {
      //     return apiUrl + '/analytics/repositories/' + this.get('full_name');
      // }
  });

  return RepositoryModel;

});
