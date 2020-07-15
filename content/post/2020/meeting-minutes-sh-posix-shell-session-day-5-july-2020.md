---
title: Meeting Minutes - sh - Posix Shell Session - Day 5 - July 10, 2020
date: 2020-07-15T08:00:24+05:30
url: /meeting-minutes-sh-posix-shell-session-day-5-july-2020
author: Mohan R
---

Here are the topics covered on the last and final day of this session,

* introducing function
* how it is basically a custom built-in command which we define
* emulating 'cd' command using custom 'replicate_cd' function
* introducing positional parameters
* howto get current program name through `"${0}"`
* howto get all positional parameters through `"${@}"`
* difference between `"${@}"` and `"${*}"`
* howto get number of given positional parameters using `"${#}"`
* introducing shell patterns
* how we can use `*` anywhere in the filename to match multiple files
* howto filter filename matching using prefix with `*`
* howto filter filename matching using suffix with `*`
* howto we can use range pattern to match different characters in filenames
* introducing `find` command
* providing `-maxdepth` to `find` command
* filtering filenames through `-name` in `find` command
* two types of post processing after find
* find with while-do-done and `read` command
* providing `-exec` to find command
* a very small introduction to **BRE (Basic Regular Expression)** through `grep` command
* importance of `ed` command and how `grep` and `sed` commands are one functionalities of `ed` command
* writing shell script
* basic struction of a shell script
* the `#!` importance
* providing shell name after `#!`
* how a shell script is basically a `function` stored as file
* using `chmod +x` to make a normal text file as excutable
* thanking everyone who attended this 5 day session

#### IRC Logs

{{<gist mohan43u 1db92fcf00e07b944de95a01beeaaab1>}}
