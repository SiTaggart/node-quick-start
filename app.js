var express = require('express'),
    routes = require('./app/routes'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());

  var cp = require('child_process');
  //spawn node child process to start grunt build and watch processes
  var grunt = cp.spawn('grunt', ['--force', 'default']);
  grunt.stdout.on('data', function(data) {
      // relay output to console
      console.log("%s", data);
  });
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});