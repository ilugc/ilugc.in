---
title: Meeting Minutes - ILUGC - June 2020 Meet (conducted on 13-06-2020)
date: 2020-06-15T18:16:24+05:30
url: /meeting-minutes-june-2020
author: Mohan R
---

Here is the summary of what happened at today's ILUGC meet.

### Emacs 'org-mode'

Around 15:00 IST, **shrini** started his talk about how to organize tasks using emacs 'org-mode'. His recent introduction with emacs and how he false started to learn emacs several times using spacemacs, doom etc. He talked about how he finally found the 'emacs-nox' package and how he learned to use 'emacs -nw' to use emacs in the terminal. 

He also talked about his finding of 'org-mode' and how he is using it for all his tasks like todo-list, notes, scheduling etc. Then he started to demo 'org-mode' with the help of https://training.ilugc.in. He explained what is meant by 'nox' in 'emacs-nox' and also gave details about how to use '-nw' flags when the emacs-gtk package is installed. He did a quick go through about emacs basic key combinations, then started explaining how to create .org files and how emacs will automatically start 'org-mode' if we open it in emacs.

He explained various heading levels in org-mode, how to organize tasks as a list, how to use the 'TAB' key to expand/collapse various topics, how to use Alt+(UP/DOWN) arrow keys to arrange topics in order. He explained how to do the TODO list using 'c-c c-t'. he also explained how to do clock-in/clock-out using 'C-c C-x C-i' and 'C-c C-x C-o'. He showed how we can export the org-file to html for web view. It is also possible to export the org file to various formats like pdf, md etc.

Finally he shared few links to learn more about emacs and org-mode,
Here are the links,

https://kushaldas.in/pages/hacker-ethic-and-free-software-movement.html
https://sachachua.com/blog/emacs/
http://emacslife.com/
https://karl-voit.at/
https://orgmode.org/worg/org-tutorials/orgtutorial_dto.html
https://www.williamhern.com/living-in-a-single-text-file.html
http://plaintextproject.online/

This is shrini's blog,

http://goinggnu.wordpress.com

He also informed the audience about how mbuf (Sakthi Kannan) from our ILUGC is actively promoting emacs for decades in various communities. Sakthi Kannan is organizing 'Emacs Aisa-Pacific (APAC)' meet  Fourth Saturday Every Month. Shrini and Sakthi Kannan answered various questions about emacs and org-mode from participants at the end of the talk.

### LTP - Linux Testing Project

Around 16:43, **Kushanchand** started his talk about contributing to "LTP - Linux Testing Project", what is meant by LTP, why we need LTP, how kernel beginners can learn much about kernel internals through writing test cases for LTP.

Then he explained what all needed to successfully compile LTP, he explained the importance of git, syscalls etc. He proceeded to show a demo about how to write a simple test case in LTP. He introduced how LTP directory structure is organized and where we need to write test cases. He successfully created/compiled/executed one simple test case to show the benefit of LTP.

He also explained the importance of proper commit message and important points to add in the newly written test cases before we submit to LTP project. He explained how to use the 'git format-patch' command to generate patch files, need to sign-off the patch using one's identity, join the LTP mailing-list, and send patches to the mailing-list. He showed his contribution to the LTP project and how he helped to fix bug in mmap() syscall.

As the talk come to end, he shared this link to organize work using git

https://www.digitalocean.com/community/tutorials/how-to-use-git-to-manage-your-writing-project

Due to lack of time, presentation about ed is postponed. It will be organized as a separate talk the coming weeks.

#### IRC Logs

{{<gist mohan43u 795018fe19b35e41ee105a859aac308d>}}
