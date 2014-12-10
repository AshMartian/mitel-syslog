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
  var raw = d.toString('utf8');
  var log = {
    date: raw.substring(1,6),
    start_time: raw.substring(7,12),
    duration: raw.substring(14,22),
    calling_party: raw.substring(23,27),
    time_to_answer: raw.substring(29,32),
    digits_dialed: raw.substring(33,59),
    completion_status: raw.substring(59,60),
    call_flags: raw.substring(60,61),
    called_party: raw.substring(61,65)
  }
  console.log(log);
  winston.info(d.toString());
});
