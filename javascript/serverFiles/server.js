var express = require('express');
var logger = require('morgan');
var path = require('path');


var Server = function () { };

Server.prototype.Start = function () {
    this.setupVariables();
    this.setupTerminationHandlers();

    this.app = express()
    this.app.use(express.static(path.join(__dirname, '../..', 'public')));
    this.app.use(express.static(path.join(__dirname, '../..', 'public')));
    this.app.set('view engine', 'ejs');
    this.app.use(logger('dev'));

    /*app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });*/

    if (this.app.get('env') === 'development') {
        this.app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    this.app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
    this.CreateRoutes();
    this.app.listen(this.port, this.ipaddress, function () {
        //console.log('%s: Node server started on %s:%d ...',
        //	Date(Date.now()), self.ipaddress, self.port);
    });
};

Server.prototype.CreateRoutes = function () {
    this.app.use('/', require('./routers/cv.js'));
    this.app.use('/blog', require('./routers/blog.js'));
};

Server.prototype.setupVariables = function () {
    // this.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
    // this.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
    this.ipaddress = '0.0.0.0';
    this.port = 8080;

    console.warn(this.ipaddress);
    console.warn(this.this.port);
    if (typeof this.ipaddress === "undefined") {
        console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
        this.ipaddress = "127.0.0.1";
    };
};

Server.prototype.terminator = function (sig) {
    if (typeof sig === "string") {
        console.log('%s: Received %s - terminating sample app ...',
            Date(Date.now()), sig);
        process.exit(1);
    }
    console.log('%s: Node server stopped.', Date(Date.now()));
};



Server.prototype.setupTerminationHandlers = function () {
    process.on('exit', function () { this.terminator(); }.bind(this));

    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
        'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ].forEach(function (element, index, array) {
        process.on(element, function () { this.terminator(element); }.bind(this));
    }, this);
};

module.exports = new Server();