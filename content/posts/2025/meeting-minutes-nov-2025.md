---
title: Meeting Minutes, November 8, 2025
date: 2025-11-09T04:11:03+05:30
url: /meeting-minutes-november-2025
author: Mohan Raman
---

Here is the quick recap of what happend in Ilugc Monthly meet, Nov 8, 2025.

### Intro

- Mohan welcomed participants
- Participants introduced themselves

### Talk 0

- Mohan started explaining about process isolation
- Explained how file system isolation of a process traditionally achieved through `chroot` for long time in Unix based systems
- Explained how modern linux have more types of process isolation including file system isolation using `namespaces`
- Explained different container systems like `lxc`, `systemd-nspawn`, `docker` and `podman`
- Showed that container images are nothing but `root file system` packed in a particular way
- Explained what is `scratch containers` and demonstrated how it can be used to reduce the container image

![talk0](/images/20251108-talk0.jpeg)

### Talk 1

- Nihaal started explaining about basic security in Linux
- Explained how `Discretionary Access Control (DAC)` traditionally used to protect files and directories in Unix based systems
- Explained `Permission bits` in DAC and explained the drawbacks in DAC
- Introduced audiance to `Mandatory Access Control (MAC)` Policies and different way to implement MAC using `Security Modules` like `AppArmor`, `Selinux`
- Explained about `AppArmor` and how security gets implemented through its `security profile files`
- Explained about `SELinux` and how security get implemented through `security context labels` using file system's `extended attributes (xattrs)`

![talk0](/images/20251108-talk1.jpeg)

### After talks discussion

- More participants introduced themselves
- Mohan provided popular FOSS news from the last week
- Participants had lively discussion about `Debian apt Rust dependency`, `Archinstall script`, `gaming on linux`, `Gnome's Xorg decommission` etc.
- Took group photo
- Windup

![talk0](/images/20251108-group.jpeg)

