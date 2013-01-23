define([
  // Deps
  'backbone',

  // Application.
  "app"
],

function(Backbone, app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      alert('Hello mum');
    }
  });

  return Router;

});
