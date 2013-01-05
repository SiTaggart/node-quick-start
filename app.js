var app = require('express').createServer();
app.use(require('readymade').middleware({root: "public"}));
app.get('/', function(req, res) {
    res.send('Simon Taggart');
});
app.listen(process.env.VCAP_APP_PORT || 3000);
