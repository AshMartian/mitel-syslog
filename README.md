mitel-syslog
============

mitel controller log to syslog server daemon

Install

    Prerequisits:

    * Node.js

To download software and install dependencies, please run the following commands (changing the ip addresses to match your systems):

<code>
    git clone https://github.com/psd401/mitel-syslog
    cd mitel-syslog
    npm install
    npm install -g forever
    MITEL_HOST=127.0.0.1 SYSLOG_HOST=127.0.0.1 forever index.js
</code>