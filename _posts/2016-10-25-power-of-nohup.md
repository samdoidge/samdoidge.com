---
layout: post
title: 'The Power of nohup'
comments: True
description: 'nohup allows is to run a command, close our connection, and still have the command run on the server - very powerful.'
---

nohup allows is to run a command, close our connection, and still have the command run on the server - very powerful.

I've used this at times I know I have a command that will take a long time to run, but I need to close my laptop / go on lunch / carry on living life.

How to run:
{% highlight bash %}nohup [command] &{% endhighlight %} 

What is `&` ?- this is to run the command in the background (stops output text appearing in our terminal).

Caveat: If you have trouble with the command not running after disconnecting, you may need to specify a full path. I had this issue with the following MySQL database import, so I used: 
{% highlight bash %}
nohup /usr/bin/mysql ... &
{% endhighlight %} 
instead of 
{% highlight bash %}
nohup mysql ... &
{% endhighlight %}

Running this you should recieve something like the following: {% highlight bash %}[1] 4587{% endhighlight %} This is our process id - you can use this to monitor the process.

{% highlight bash %}ps aux | grep 4587{% endhighlight %}  Will gives us some details of the current command.

Now you can goto lunch!

