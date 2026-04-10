---
title: Meeting Minutes - sh - Posix Shell Session - Day 3 - July 08, 2020
date: 2020-07-08T23:40:25+05:30
url: /meeting-minutes-sh-posix-shell-session-day-3-july-2020
author: Mohan R
---

Todays session started on time. As usual **Shrini** provided free shell account to users to remote access to one of his temporary `aws` server for practice. Here are the topics we covered today

* what is mean by default file descriptors and what are they
* how these default file descriptors are mapped for each command
* using `ls -l /proc/<pid>/fd` to view file descriptors mapping
* the /proc special directory
* the /proc/self special directory
* using 'echo $$' to get the pid of current shell
* what is mean by pid
* how the default file descriptors '0', '1' and '2' all mapped to /dev/pts/1
* what is mean by /dev/pts/1
* how every terminal is basically a character device file resides in /dev/pts directory
* how you access the default file descriptors as STDIN, STDOUT and STDERR in 'c' programming
* how to do redirection by changing the mapping of these default file descriptors
* introducing `cat` command
* how `cat` commands reads standard input and writes it to standard output
* redirecting `cat` command output to a file instead of using standard output
* redirecting `cat` command input from a file instead of using standard input
* how `cat` reports errors through STDERR
* how to redirect standard error to `/dev/null` to silence `cat` command
* what is mean by pipe
* how pipes differ from redirection
* how to join standard output of one command to standard input of another command using `|`
* how to find process id of particular command using `ps axf | grep <command>`
* introducing `grep` command and how it searches using standard input
* Explaining famous "do one thing and do it well" unix philosophy
* how this unix philosophy shaped unix by having lot of tools instead of having big monolithic GUI applications
* introducing background jobs
* how to start background job using `&`
* how to view background jobs using `jobs` command
* how to bring back an background executing job to foreground using `fg` command
* introducing shell variables
* introducing environment variables
* how normal shell variables differ from environment variables
* how to view environment variables using `env` command
* how to export a normal variable to environment variable using `export` command
* why a child shell only gets environment variables, not normal variables
* introducing `less` command, how to navigate output through page by page
* Q & A

#### IRC Logs

{{<gist mohan43u ee8c305484f972f2e262ef67934bc332>}}
