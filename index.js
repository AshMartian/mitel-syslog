var moment = require('moment');
var winston = require('winston');
require('winston-syslog').Syslog;
var options = {
  host: '10.0.0.153',
  port: 5002
}
winston.add(winston.transports.Syslog, options);

var current_year = moment().year();

var s = require('net').Socket();
s.connect(1752, '10.0.240.29');
s.on('data', function(d){
  var raw = d.toString('utf8');
  var raw_time = raw.substring(1,6) + '-' + current_year + ' ' + raw.substring(7,12);
  var json = {
    timestamp: moment(raw_time, "MM/DD-YYYY HH:mm").format(),
    duration: raw.substring(14,22),
    calling_party: raw.substring(23,27),
    time_to_answer: raw.substring(29,32),
    digits_dialed: raw.substring(33,59),
    completion_status: raw.substring(59,60),
    call_flags: raw.substring(60,61),
    called_party: raw.substring(61,65),
    transfer: raw.substring(65,66),
    third_party: raw.substring(67,71),
    account_code: raw.substring(72,84),
    route_optimization: raw.substring(84,85),
    system_identifier: raw.substring(85,88),
    ani: raw.substring(91,101),
    dnis: raw.substring(102,112),
    call_indentifier: raw.substring(113,121),
    call_sequence_identifier: raw.substring(121,122),
    associated_call_identifier: raw.substring(123,131)
  }  
  console.log(json);
  winston.info(d.toString());
});
