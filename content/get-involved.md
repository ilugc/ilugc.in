---
title: "Get involved with ILUGC"
url: /get-involved
date: 2020-06-15T18:08:09+05:30
author: Mohan R
---

## Official IRC channel

People from ILUGC community hang in **#ilugc** channel on **[Freenode IRC network](https://en.wikipedia.org/wiki/Freenode)**. You can chat with them to clear your queries/doubts or you can help others with your knowledge. Read more about IRC [HERE](https://fedoramagazine.org/beginners-guide-irc/)

| Channel                             | IRC Network Address |
| :---------------------------------- | :------------------ |
| [#ilugc](https://training.ilugc.in) | chat.freenode.net |

## Conducting IRC Meeting or Training

You can conduct IRC based meeting or training using ILUGC's training server. Send a mail to [ILUGC mailing-list](https://www.freelists.org/list/ilugc) with your purpose, and people can help you organize your meeting or training through following URL

URL: https://training.ilugc.in

## Contributing to ilugc.in

You can contribute to [ilugc.in](https://ilugc.in) website by writing Blog posts in [MarkDown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). These are the steps to follow to write Blog Post,

* Login to [Github](https://github.com) using your github account credentials.
* [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) ilugc.in [website repo](https://github.com/ilugc/ilugc.in) into your account.

Before you clone your copy of ilugc.in website repo to your local machine, you need to install these required softwares,

1. [git](https://git-scm.com/)
2. [hugo](https://gohugo.io/)

Following commands will install Both requirements in [Ubuntu 20.04](https://releases.ubuntu.com/20.04/)

```bash
$ sudo apt install git hugo
```

Once you done installing the required packages, clone your copy of ilugc.in website repo like below

```bash
$ git clone --recurse-submodules git@github.com:foouser/ilugc.in.git
```

Once clone completed, **ilugc.in** directory will be created, go inside **ilugc.in** directory and run Hugo,

```bash
$ hugo server
```

Hugo will run by default in **http://localhost:1313** address, keep Hugo running and start adding your blog post under **content/post/year/** inside **ilugc.in** directory. The filename of your blog post should end with **.md** extension. Hugo will automatically show your blog post through **http://localhost:1313**. Here is one example blog post, this blog post is saved as **"content/post/2020/example-blog-post-2020.md"** under **ilugc.in** directory.

```markdown
---
title: Example Blog Post
url: /example-blog-post
date: 2020-06-15T19:24:31+05:30
author: Foo
---

This is an Example Blog Post. The field **date** in the header is generated using `date -Iseconds` command.
```

Once you are satisfied with your blog post, commit your changes and push your changes into your own fork of ilugc.in website repo,

```bash
git add -A
git commit -m 'wrote my first blog post'
git push origin master
```

Finally create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) to upstream [ilugc.in repo](https://github.com/ilugc/ilugc.in). People who maintain [ilugc.in](https://github.com/ilugc/ilugc.in) will look into your changes and merge your pull request.

Once your pull request merged, it will start appear in [ilugc.in](https://ilugc.in)
