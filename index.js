var moment = require('moment');
var winston = require('winston');
require('winston-syslog').Syslog;

var options = {
  host: process.env.SYSLOG_HOST,
  port: 5002
}

winston.add(winston.transports.Syslog, options);

var current_year = moment().year();

var s = require('net').Socket();
s.connect(1752, process.env.MITEL_HOST);
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
  var log = moment(raw_time, "MM/DD-YYYY HH:mm").format()+','+raw.substring(14,22)+','+raw.substring(23,27)+','+
    raw.substring(29,32)+','+raw.substring(33,59)+','+raw.substring(59,60)+','+raw.substring(60,61)+','+
    raw.substring(61,65)+','+raw.substring(65,66)+','+raw.substring(67,71)+','+raw.substring(72,84)+','+
    raw.substring(84,85)+','+raw.substring(85,88)+','+raw.substring(91,101)+','+raw.substring(102,112)+','+
    raw.substring(113,121)+','+raw.substring(121,122)+','+raw.substring(123,131)
  winston.info(log);
});
