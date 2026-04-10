---
title: Talk Minutes - Ed - The Text Editor - June 16, 2020
url: /talk-minutes-ed-jun-16-2020
date: 2020-06-16T19:22:41+05:30
author: Mohan R
---

Following are the important points discussed today about **'ed'**

1. history about ed
2. how to invoke ed
3. why 'ed' is a line editor
4. details about command mode
5. details about input mode
6. line numbers in ed
7. how to add content to 'ed' current buffer
8. how to display whole buffer
9. print specific line or lines using line addresses
10. deleting and changing lines
11. saving current buffer to filesystem
12. opening files in ed
13. using regular expression instead of line address in ed
14. forward searching
15. reverse searching
16. global searching
17. intro to Basic Regular Expressions (BRE)

#### Links shared in the talk

* ['ed' FreeBSD Man Page](https://www.freebsd.org/cgi/man.cgi?query=ed&apropos=0&sektion=0&manpath=FreeBSD+12.1-RELEASE&arch=default&format=html)
* https://man7.org/linux/man-pages/man7/regex.7.html
* https://man7.org/linux/man-pages/man1/ed.1p.html
* https://www.gnu.org/software/ed/
* https://xkcd.com/378/


#### Session Replay

![ed-talk](/images/ed-talk.gif)

#### IRC Logs

{{<gist mohan43u 5d44c71e97e254d36dd450137863c6ee>}}

#### Terminal Capture Logs

[ed-talk-script-output-files.tar.gz](/record/ed-talk-script-output-files.tar.gz)

To playback these logs, follow these steps

```bash
$ tar xvzf ed-talk-script-output-files.tar.gz
$ scriptreplay -m1 --timing=20200616155221-24417.timing 20200616155221-24417.typescript
```
