---
title: Meeting Minutes - ILUGC - November 2020 Meet (conducted on 21-11-2020)
date: 2020-11-24T21:02:19+05:30
url: /meeting-minutes-nov-2020
author: Mohan R
---

Here is the summary of what happened on this month's ILUGC meet

### systemd-nspawn

Mohan welcomed participants and started his session about **[systemd-nspawn](https://www.freedesktop.org/software/systemd/man/systemd-nspawn.html)**, gave a brief gave a brief overview about how containers are created in Linux, what are the building blocks for container, how a good old **[chroot](https://man7.org/linux/man-pages/man2/chroot.2.html)** is one type of container etc.

He then explained how we can achieve a simple container through **systemd-nspawn**. How **systemd-nspawn** can act as both **system container** as well as **application container**, what is the difference between these two type of containers. How one can use **system container** to setup his own development environment to do development for **Ubuntu** on top of **Arch**.

### Tip about Debian ISO

Vrajaraja started his talk about how he achieved making his Debian to use his ISO as a repository to install packages and reduced unnecessary network download. He also provided steps to mount the ISO properly before adding the ISO to Debian's apt system.

### After Talks

Since the main talks are completed within one hour, the floor was opened for participants to discuss freely about interesting topics, participants introduced them self and started discussing,

1. We talked about how TeX and **[LaTeX](https://www.latex-project.org/)** is still relevant, how learning **LaTeX** is going to help even after another Fifty years, then discussed about how modern systems like **Pandoc**, **Markdown** etc., simplifying writing documentations, then discussed about how to convert between different file formats using **docbook xml** as base etc.
2. Talked about the evolution of **[Haskell](https://www.haskell.org/)** and different Functional languages like **Ocaml**, **Clojure**, **lisp** etc. How functional language features adapted by multi paradigm languages like **Python**, **Java**, **Javascrpt** etc.
3. Then started discussion about C vs Rust, how Rust can be utilized to replace C to program in Linux Kernel. The benefits of using Rust etc. Then discussed about why C is still used in many embedded projects, the benefits of using C etc.

The after talks very much helped understand various technologies. we finally ended the meet after these discussions.
