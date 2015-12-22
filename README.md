mitel-syslog
============

mitel controller log to syslog server daemon

##Install

Prerequisits:

* Node.js

To download software and install dependencies, please run the following commands (changing the ip addresses to match your systems):

    git clone https://github.com/psd401/mitel-syslog
    cd mitel-syslog
    npm install
    npm install -g forever
    MITEL_HOST=127.0.0.1 SYSLOG_HOST=127.0.0.1 forever index.js

Persistent installation can be done using the @reboot command in crontab:

    crontab -e

Then insert the following as the top line (again, change ip addresses to match your systems):

    @reboot PATH=$PATH:/usr/local/bin MITEL_HOST=127.0.0.1 SYSLOG_HOST=127.0.0.1 forever /opt/mitel-syslog/index.js
