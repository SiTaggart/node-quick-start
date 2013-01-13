#Node Quick Start
A quick start app structure I can use to get a node site up and running. Inspire by Yeoman and Mimosa and the like, but less cruft.
##Build with
Express and Jade templating. Bower for ui Package management. Grunt task to build SASS files and lint js files.
##Run with
& node app
I use LiveReload anyway so keep that seperate.
##Usage
Make sure you have node, npm, grunt and bower insatlled globally.
Clone the repo and run before you run the app server to get deps:
$ npm install
$ bower install
###TODO:
- Make sure jsHint is running
- Require optimise the scripts some how.
- Maybe workout a way to utilise the bower components better, by moving to app/*
