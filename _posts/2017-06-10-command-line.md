---
layout: post
title:  "The command line on steroids"
date:   2017-06-10 17:00:00 +0100
categories: tools
tags: [Tools, Beginner]
draft: true
thumbnail: matrix-2.png
---
A command line is a text interface that you interact with by typing commands.
In windows you have the `cmd.exe` and in Unix based systems (for instance, Linux and Mac OS) you have `bash`.
If you use Linux or Mac, the commands that you can execute in the command line
are very similar.
Here I will `focus on the Unix based command line` (the ones in Linux and Mac OS).
![Command lines available in Linux, Mac and Windows]({{site.baseurl}}/assets/images/posts/command_line/all_command_lines.png)

<h3>
	Why should I care?
</h3>
Like a real developer, you end up using the command line... A lot!
When you master the command line, you become really efficient and you do things much faster that using a GUI.
Most technologies you can use for software development have a Command Line Interface (CLI). I also have one for the tool I am using to write this blog.
If you always run away from the command line, think twice. 
One day you will need to use it.
Also, `you look cool and you can impress your team mates`!

![Embrace the power of Command Line]({{site.baseurl}}/assets/images/posts/command_line/embrace-command-line.jpg)


<h3> 
	How to get the best command line experience
</h3>

`Bash` already provides a really nice experience but you have alternatives such as `zshell`.
It allows you to execute the same exact commands and have several improvements such as a better autocomplete feature (you know, when you are typing a command, press <kbd>Tab</kbd> and it automatically writes stuff for you).

You have [Oh-My-ZSH](https://github.com/robbyrussell/oh-my-zsh) 
which is basically a `zshell on steroids`.
You can install plugins to improve your experience.
It is really awesome.
Try it on your Linux or Mac OS system and see for yourself.
Check the link to see how to install it on your system.
After you install it, you can notice that your command line prompt is different. When you navigate to a directory that belongs to a git repository, it tells you in which branch you are.

![ZSH promot]({{site.baseurl}}/assets/images/posts/command_line/zsh_prompt.png)


The whole experience can be even better with the right terminal emulator.
Check what can you do in your system in the sections below:

<h4>
	Linux
</h4>
Here you can use [Guake](https://github.com/Guake/guake).
It allows you to have a custom command line. You can customize colors, fonts and assign a key or combination of several keys to make the terminal appear and disappear. 
You can configure it to appear from the top and occupy half of the screen or any portion you want.
`Check the link to see how you can install it on your distribution` !
If you have this along with `Oh-my-zsh` you will have a really nice command line experience.

<h4>
	Mac OS
</h4>
In this Operating System you can use the default terminal.
[Screenshot]
However, you can have something better which is [iterm](https://www.iterm2.com).
It is very customizable. You can configure colors, fonts, etc. You can also assign a key or a combination of keys to trigger the terminal.
You press the keys, it appears, you press them again and it goes away from you screen.
[Gif]
Awesome right?
Use it with `Oh-my-zsh` and you will `look like a pro` using the command line on your Mac!

<h3>
	Usage
</h3>
As I already told you, `oh-my-zsh` can have several plugins.
Here I will show you some examples of plugins and features you have on your new awesome command line:

- Git plugin: `oh-my-zsh` already comes with a git plugin installed.
It just defines a bunch of alias for you git commands. Seems nothing special but if you are lazy (like any developer), you will find it really useful.
Examples of some alias: 
```bash
gst # git status
```
```bash
ga # git add
```
```bash
gl # git pull
```
```bash
gp # git push
```

- Themes: You can customize the look and feel of your command line. Check [all the themes you can install](https://github.com/robbyrussell/oh-my-zsh/tree/master/themes)
- Auto-update: Sometimes there are updates for `oh-my-zsh`. But you don't have to worry about that. Your command line will let you know when there are updates available and ask if you want to install them
- You have [much more plugins available](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins)

<h3>
	Conclusion
</h3>
Any Unix based Operating system already gives you an awesome command line.
However, you can make it even better and look cool if front of your colleagues.
`Oh-my-zsh` and the right command line software (Guake for Linux and iterm for Mac) is a really good solution and makes you work very efficiently.
Like the oh-my-zsh author says
`"Oh My Zsh will not make you a 10x developer...but you might feel like one."`
