---
layout: post
title: 'The Power of nohup'
description: 'nohup allows is to run a command, close our connection, and still have the command run on the server - very powerful.'
tags: [tech]
---

nohup allows is to run a command, close our connection, and still have the command run on the server - very powerful.

I've used this at times I know I have a command that will take a long time to run, but I need to close my laptop / go on lunch / carry on living life.

How to run:
``` bash
nohup COMMAND &
```

What is `&` ?- this is to run the command in the background (stops output text appearing in our terminal).

Caveat: If you have trouble with the command not running after disconnecting, you may need to specify a full path. I had this issue with the following MySQL database import, so I used:
``` bash
nohup /usr/bin/mysql ... &
```
instead of
``` bash
nohup mysql ... &
```

Running this you should receive something like the following: ``` bash[1] 4587``` This is our process id - you can use this to monitor the process.

``` bash
ps aux | grep 4587
```
Will give us some details of the current command.

Now you can goto lunch!
