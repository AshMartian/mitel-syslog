var winston = require('winston');
require('winston-syslog').Syslog;
var options = {
  host: '10.0.0.153',
  port: 5002
}
winston.add(winston.transports.Syslog, options);

var s = require('net').Socket();
s.connect(1752, '10.0.240.29');
s.on('data', function(d){
    console.log(d.toString());
    winston.info(d.toString());
});
