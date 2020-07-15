---
title: Meeting Minutes - sh - Posix Shell Session - Day 4 - July 09, 2020
date: 2020-07-15T07:29:00+05:30
url: /meeting-minutes-sh-posix-shell-session-day-4-july-2020
author: Mohan R
---

Here are the topics we covered on day four,

* importance of exitcode (or returncode)
* howto retrive last executed command's exitcode through `${?}` special variable
* howto use this exitcode in if-elif-else-fi command
* howto use case-esac command
* introducing 'for-do-done' loop
* how this is different from regular for loop in 'C' programming
* iterating through static values using for loop
* introducing command substitution through `$()`
* how command substitution can generate dynamic values for each iteration in for loop
* importance of command substitution
* introducing 'while-do-done' loop
* introducing variable expansion, what exactly means '$' before a word
* difference between ${var} and "${var}"
* different way to expand variables using `:+`, `:=`, `:?` and `:-`
* howto do arithmetic expansion using `$(())`
* built-in special variables which 'sh' provides by default
* meaning of '${$}'
* meaning of '${?}'
* meaning of '${!}'
* running background jobs using '&' seperator
* introducing 'jobs' command, also 'bg' and 'fg' commands

#### IRC Logs

{{<gist mohan43u 4ae51ce5026d5e6745dd5737d1293a18>}}
