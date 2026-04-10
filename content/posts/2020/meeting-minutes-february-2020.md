---
title: "Meeting minutes February 2020"
date: 2020-02-09T10:00:00+05:30
url: /meeting-minutes-february-2020
author: "Abdun Nihaal"
---

## Hackerspace chennai opens soon? {#hackerspace-chennai-opens-soon}

Christoph Müller gave a talk on Hackerspaces. He described hackerspace as a community operated space where people come to make things, learn and meet people.
He described a hackerspace in Switzerland called Ruum42. You can view projects made at Ruum42 at <https://ruum42.ch/projekte>.
At Ruum42, people also conduct weekly Linux install fests called Linuxtreff which is open to all.

He shared his opinion that when building a hackerspace the emphasis should not be on making a lot of rules but on building a community around it.
There will be some issues but they can be solved by discussing and communicating clearly with other members.

He explained the difference between a hackerspace and a makerspace. Makerspaces are spaces that are paid on demand for the time spent there making things.
In makerspaces, meeting people and socializing is not a priority. Hackerspaces usually operate through membership. All members get 24/7 access to the space.
The space is maintained by the members.

You can find more about Christoph Müller at <http://stof999.ch/contact.php>.


## FOSS for Android {#foss-for-android}

Manimaran gave a talk on FOSS applications for Android. He started by talking about FDroid, an alternative to Play store.
FDroid is a community maintained app store that contains only Free and Open Source applications. It does not require us to login to download applications.
FDroid makes use of verification servers to check the integrity of the APK files by building the APK from source code and checking if they are the same.
It also checks for the use of proprietary libraries in applications.

He used an application called Screen Stream to stream his mobile screen to a laptop browser to show us other FOSS apps installed in his mobile. A person from the audience also shared the FOSS applications he uses. Here are some of the applications that were discussed.

| Application Name                                                                        | Used to                   | Alternative to  |
|-----------------------------------------------------------------------------------------------|----------------------------|-----------------|
| [F-Droid](https://f-droid.org/en/)                                                   | Download applications      | Play store      |
| [Screen Stream](https://f-droid.org/en/packages/info.dvkr.screenstream/)                   | Stream mobile screen to PC |                 |
| [NewPipe](https://f-droid.org/en/packages/org.schabi.newpipe/)                       | Frontend for YouTube       | YouTube app     |
| [SkyTube](https://f-droid.org/en/packages/free.rm.skytube.oss/)                      | Frontend for YouTube       | YouTube app     |
| [NitroShare](https://f-droid.org/en/packages/net.nitroshare.android/)                   | Sharing files              | ShareIt         |
| [Frost](https://f-droid.org/en/packages/com.pitchedapps.frost/)                    | Frontend for Facebook      | Facebook app    |
| [LibreTorrent](https://f-droid.org/en/packages/org.proninyaroslav.libretorrent/)          | Torrent client             |                 |
| [FreeTamilEbooks](https://play.google.com/store/apps/details?id=com.jskaleel.fte&hl=en%5FUS) | Download Tamil Ebooks      |                 |
| [OSMAnd+](https://f-droid.org/en/packages/net.osmand.plus/)                          | View OSM maps              | Google Maps     |
| [PDFConverter](https://f-droid.org/en/packages/swati4star.createpdf/)                     | Work with PDF files        | CamScanner      |
| [StringLate](https://f-droid.org/en/packages/io.github.lonamiwebs.stringlate/)          | Translate other FOSS apps  |                 |
| [Etar](https://f-droid.org/en/packages/ws.xsoh.etar/)                             | Calendar                   | Google Calendar |
| [Gadgetbridge](https://f-droid.org/en/packages/nodomain.freeyourgadget.gadgetbridge/)     | Fitness tracker            | Mi Fit          |
| [NextCloud](https://f-droid.org/en/packages/com.nextcloud.client/)                     | Cloud backup               | Dropbox         |

Visit <https://prism-break.org/en/categories/android/> for a more extensive list of FOSS apps.

Manimaran is a Free Software Activist and a Mobile Application Developer. You can find more about him at <https://manimaran96.wordpress.com/about/>.


## Introduction to Virt Manager and Libvirtd {#introduction-to-virt-manager-and-libvirtd}

Mohan gave a talk on Libvirt API and [Virt-Manager](https://virt-manager.org/). He started by explaining emulators and hypervisors.
Emulators allows us to run applications binaries compiled for a particular architecture to run on a different architecture.
Hypervisors are used for sharing resources by providing mutliple virtualized environments. It ensures isolation between Virtual machines.
Each virtual machines is provided some logical resources like CPU, disk, IO.

There are broadly two types of hypervisors. Baremetal hypervisors run directly on the machine without the need for a host OS. Examples of baremetal hypervisors are Xen, HyperV, VmWare esx.
Hosted hypervisors run on top of a host OS. VirtualBox is an example. Other than these two types, there exists KVM.
KVM (Kernel-based Virtual Machine) is a kernel module that allows Linux to act as a hypervisor.

LibVirt API is used by frontends to communicate with KVM, Xen or other hypervisors to manage QEMU virtual machines and LXC containers.
Virt-manager, GnomeBox and VirSh are some frontends that allows us to manage VMs.

Mohan gave a demo of Virt-manager. He also showed how he uses snapshots to quickly test application on different versions of Ubuntu, without creating new virtual machines everytime.
He talked about the difference between docker and hypervisors. Docker uses kernel namespaces for isolating filesystem, network and IPC of host.
But docker containers still use the same underlying host kernel.

To know more about libVirt API, Virt-manager and KVM, visit

<https://libvirt.org/>

<https://virt-manager.org/>

<https://www.linux-kvm.org/page/Main%5FPage>
