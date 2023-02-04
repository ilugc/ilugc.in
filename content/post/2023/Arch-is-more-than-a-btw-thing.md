---
title: "Arch is more than a btw thing"
date: 2023-02-03T18:00:00+05:30
url: /arch-is-more-than-a-btw-thing
author: "Parameshwar Arunachalam"
---

Disclaimer: This is the my first blog post writing experience so bear with my mistakes and flow

[Arch Linux](https://archlinux.org/), you may know this distribution through memes and linux slander videos.But at the same time due to this, it is rated as one of top famous linux distribution in the past years.

When everyone addresses Arch linux you may see they might have used a term called BTW (By the way...) This is used because every arch user has a habit of telling by the way i use arch after they have installed it in their system.

When I was joining in [ILUGC](https://ilugc.in/) and [KanchiLUG](https://kanchilug.wordpress.com/) meetings, I don't understand the memes of the Arch Linux I even don't know much about Arch. 

Thanks to Mohan Raman, who introduced the concept of arch linux. 

From that day of introduction, I had a urge to install Arch linux and eagerly waiting to say BTW.

Even I wanted to try Arch for the sake of saying BTW, now my view about arch is completely different. I see Arch is more than just a BTW thing.

In this blog article I plan to share my Arch experience and let you guys peek a little behind the btw curtain to show you it is more than a btw thing

I like to be prepared for things, so I did my homework on studying about arch linux and went to installation videos in Youtube(Don't worry open source enthusiasts I used NewPipe client only) and many other online sources.

When watching the videos and going through the actual documentation [installation Guide](https://wiki.archlinux.org/title/Installation_guide). I actually was shocked to see very simple steps and it is not long process too for installing arch.

After referring multiple resources I ended up using [Arch Wiki](https://wiki.archlinux.org/) Installation guide for the installation.

The reason behind this is, Arch Wiki's installation guide is one of the most detailed wiki page. It contains the steps along with why you are running these commands. 

Now I can see why Arch Wiki is rated as one of the best wiki in the linux community. 


Of course I didn't try directly in my primary system, I tried installing the Arch linux in a virtual machine using [KVM](https://wiki.archlinux.org/title/KVM) 

I completed the Arch linux base installation in 30 minutes!!!

This seems easy I thought. But I missed the big picture and proudly shutdown the system before reading the after installation page in Arch Linux.

When my system turned on, it doesn't have internet connection, any type of network manager, not even a normal user and few more things I missed. So I had to re-do the entire installation again. : )

At this point, I become more aware and did the correct installation and I installed networks and a normal user too in the next turn of installation.

From this first segment of installation I learnt that [RTFM](https://wiki.archlinux.org/title/Arch_terminology#RTFM) (Read The Fantastic Manual) is 100% true and we need to read it throughly.

## Where to next?

The Arch wiki even got this covered, they have wiki page of what to do post base installation.

Most of you know what is the philosophy behind Arch but if you are a beginner, Arch linux distribution is created to give the user complete control to build their own system from base linux. (That means you will have kernel, tty sessions and base linux terminal tools with it) But you won't have any graphical systems or sudo (Yup, even sudo is not installed in base package)

Now, I didn't realize I am going in the path of englightment about linux working. Arch showed me how everything works and why I need them exactly explained in the wiki of post installation steps.


So I started to read one article by another and understood what is [Xorg](https://wiki.archlinux.org/title/Xorg), [desktop environment](https://wiki.archlinux.org/title/Desktop_environment), [window managers](https://wiki.archlinux.org/title/Window_manager) and so much more...

I read the installation guide for Xorg and neccessary softwares in the Arch Wiki itself. (Yes, your are thinking right, they even have detailed installation and beginner guide for these applications too in Arch Wiki itself)

Along the way, I learnt about display servers, [fonts](https://wiki.archlinux.org/title/Fonts), tty sessions, initial configs and dot files

I also made a decision to go with window managers instead of desktop environments. I was interested in the concepts of window managers and switching completely to use keyboards all time and become linux wizard.


So I went with [i3](https://wiki.archlinux.org/title/I3) (The best tiling window manager you will ever find)

From this segment of graphical installation I have learnt about how a GNU/Linux works on our computers.

At this point, i have spent 2 hours alone for this graphical installation and setting up basic window managers.

## We are humans, so mistakes are part of us

I felt a great accomplishment after the installation of graphical system installaton. So I started to test my VM working.

Seems everythign was working fine (Except one thing, but I was not aware of it at that particular point of time)

So I tried to spin up multiple VMs and repeat this installation proces 3-4 times to get myself familiarized with the steps.

This point I become very confident after installtion Arch 3 time in one week of time.

So I decided to make a jump in the next week to install Arch directly to my primary machine and make the switch.

So I wiped the existing Manjaro distro in my system and installed Arch in the next week.

After going through all the process on one fine saturday morning on that week. I thought of relaxing to watch some videos online and cool of my saturday. But Arch has a great present for me. The video was playing good but I don't have any audio.

I thought I had 0% volume but I had 60% still no sound.

This is the one thing I mentioned previously I missed testing audio in my VM :(

After realizing I have no audio, I not able to relax my saturday. I pat my back and said we are humans and mistakes are integral part of us.

So let's fix it, 

I started to read about [ALSA](https://wiki.archlinux.org/title/Advanced_Linux_Sound_Architecture), [PulseAudio](https://wiki.archlinux.org/title/PulseAudio) and [PipeWire](https://wiki.archlinux.org/title/PipeWire) and all about these things.

Then I installed ALSA and PulseAudio to go with (PipeWire was very new at this point)

I installed and made some initial configs, but still I don't have audio. I got frustrated and shutdown my computer then watched TV.

After sometime, I still reading Arch Wiki and PulseAudio forums to see if I made any existing mistakes.


But no luck, the next day (sunday) came. Still no luck and I am continuing to read online sources. 

Right before KanchiLUG meeting, I found the issue why my audio was not working. 

Really embarrassed at this point, because the reason I didn't have audio is the speaker profile in pulse audio config is muted ( I laughed a lot!!!)


When I can hear the first video with audio I was filled with joy. Like I accomplished something big like landing on the moon (But no just got my audio back : ))

At this segment, I learnt a lot about audio related items

## This again!

I joined the KanchiLUG meeting, unmuted and started to speak.

But others can't hear my voice, they only heard a regular intervalled pulse of beeps.

I was again got played by the audio items, but to continue the meet I joined in Jitsi mobile and continued 

Then after KanchiLUG meeting, I searched and found that my default input source is not mic and it is defaultly set up to display and without audio it just played beeps.

I realized this mute thing after 3 days only (The wednesday of the following week)

Yup, 3 days after only i found this (due to work week)

## The complete control of customization

After that, I have a working system in my hand, I was happy and motivated to read more about desktop customizations and the famous reddit page for unix customization.

Got some inspirations for my desktop and started customizing my Arch with the way I like.

After few days of tweaking and customizing, I had a good looking desktop look in my Arch system.

I learnt that most of the customizations are done through dot files. I liked this idea of modularity in customizations. each and every applications will have theiir own .dot files and they can be customized on it.

Also the portability of this dot files was a great thing, even if some software update broke my system. I can restore my complete desktop by re-installing Arch from scratch and adding my .dot files from my repo.

I tried this practically, I was able to restore my current setup in 2 hours from scratch.

Nowadays I am switching themes every 3 months once. And I will have a backup of my old themes so even I need it in future I can switch to it in few minutes.

Having this much freedom in customizing, I feel like a kid in the ice cream shop wanting every single flavours of it.

Below is my current customized setup

![Application screen](/images/screenapplication.png)

![Empty screen](/images/screenempty.png)

## Don't forget the rolling release.

Arch is one of the rolling release distro, i.e we get updates regularly like daily and two days once with latest softwares in the market

There is another kind stable release distro like ubuntu, debian which have release cycle of 3 or 6 months you will recieve a big updates


Another reason for Arch being famous is this rolling release, for getting bleeding edge softwares.

We always get latest softwares, updates and security patches.

Of course, sometimes these bleeding edge softwares may have crashes. But don't worry we can restore our entire system in 2 hours : )

## Another important aspect of Arch is community and user repository

Arch has one of the wise community who helps you in the right way and lead you tolearn things on your own. They won't directly tell you answers but they will teach you how to find answers.

Don't forget the [AUR](https://aur.archlinux.org/) (Arch User Repository)

AUR is a large collection of application repo which contains the makefiles to compile the software by yourself. It also contains binaries for some items.

Even application which are developments will be available here for you to install from the make files.

This AUR has a great community base, and many people will be contributing in this makefiles.

Also this is one of the portal to enter into the Arch development team. They will follow up the contributions you made in the AUR and it's popularity. Based on this they will evaluate your contributions before inviting you to the distro maintainers circle.

I have used AUR few time back in this period to install some applications which are in developments and some application which are not available in the normal repo.

## Summing up

Using Arch taught many things, I have listed some of them below.

- Reading Wiki and documentation is essential to learn more
- Core concepts of how desktop linux works
- About audio, video and graphical drivers
- Customization methods and their ease of use
- Latest software usage and their benefits
- The importance of community and community based repositories

and most important learning from arch is 
- **Never stop learning**

Even today, I am learning more things about linux and it's working through arch. Nowadays many updates were came like wayland, Pipewire etc., And I am still learning many stuff along the way I use Arch.

You don't need to install Arch as your primary system to have these experience. You can still learn these things in a Virtual Machine. But If you want the learngin to be more frequent, I highly suggest you to switch to Arch and test it out.

Before switching practice it in a VM to familiarize the process.

So as I mentioned in the title, Arch is more than a btw thing 

Hope you had a good reading experience and a peek behind arch experience
Sorry If I bored you : )

let me know if you have any feedback through mail : stark20236@gmail.com

