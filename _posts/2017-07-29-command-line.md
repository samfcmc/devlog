---
layout: post
title:  "2 steps to have a command line on steroids"
date:   2017-06-10 17:00:00 +0100
categories: tools
tags: [Tools, Beginner]
comments: false
thumbnail: matrix-2.png
intro: "The command line is any developer's best friend. But, are you using it the right way? Check these two steps to get the best of your command line"
---

If you are a software developer you end up using the command line at some point. 
Some people use it to run web servers, compile code or just to push the code to the git repository.
If you are learning how to code keep on reading this post because you will learn something about being more efficient in software development.
No matter what you use the command line for, check these two steps to improve your experience.

Small Intro
Screenshot with the three default command lines

# First: Get a nice command line emulator
Most operating systems already give you a command line interface.
However, most of them have limitations.
I will list one option for each operating system which I use or already tried. All of them will give you a lot of power in terms of customization.
For instance, you can define a combination of keys that will make your terminal appear from top to bottom (Remember the console in Quake?).

* Mac OS: 
iTerm
* Linux: Guake
* Windows: ConEmu

# Second: Install oh-my-zsh
No matter the operating system and terminal emulator you use, you end up using `bash` as your shell.
However, I prefer `zsh` since it has more features, including an improved autocomplete.
I recommend that you install [`oh-my-zsh`](https://github.com/robbyrussell/oh-my-zsh) on top of `zsh`. Basically it provides a lot of plugins for your `zsh`.
When you press <kbd>Tab</kbd> the system will give you a list of options to complete your command.
You have this behavior in both `bash` and `zsh`.
However, check the following animations and see for yourself.

[bash vs zsh autocomplete]

Another cool "feature" is a bunch of alias for most used git commands:
* `ga`: git add
* `gc`: git commit
* `gl`: git pull
* `gp`: git push

Of course, you can just type `g` followed by the git command you want. For instance, to clone a repository:
```shell
g clone <remote url>
```

Check all the plugins available in the `oh-my-zsh` git repository page in their [plugins directory](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins).

Also, you can customize the look and feel and much more.

After these two steps, your command line will look the following in each operating system:
* Mac OS:

* Linux:

* Windows

# Conclusion
Having a nice terminal emulator and `oh-my-zsh` allows you to have what I think that is the best command line usage experience.
It makes you do things faster.
Like the `oh-my-zsh` authors say:

`Oh My Zsh will not make you a 10x developer...but you might feel like one.`

If you already know everything about this or even more, share this post and leave a comment if you notice that something is wrong. I really appreciate and need your feedback :)