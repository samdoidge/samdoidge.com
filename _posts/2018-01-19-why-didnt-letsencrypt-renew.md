---
layout: post
title: "Why didn't Let's Encrypt auto renew?"
image: /assets/php-logo.png
comments: True
---

I accessed one of my sites recently to find the SSL is invalid. Rookie error I thought; I had probably just forgotten to setup a cron for auto renewing the SSL certificate for Let's Encrypt... So I goto run the command manually,
``` bash
sudo certbot renew
```


but it tells me there are no certificates to renew :thinking:.
<p style="text-align: center">
	<img src="/assets/cert-not-yet-due-for-renewal.png?">
</p>

How odd, I thought; let me trouble shoot this. I find my certificate has been renewed, but still an invalid warning is appearing ony my site. I look into my root cron:
``` bash
sudo crontab -l
```

 and find I do have the command set for renewing. I restart nginx manually and the warning on the website is gone. So what's gone wrong?

``` bash
43 6 * * * certbot renew --post-hook "systemctl restart nginx"
```

#### Solution

Within the post-hook option, it seems like a minimal $PATH is used, so post-hook option isn't finding the ```systemctl``` command. I update the command to have the full path, and this shouldn't trouble us again :+1:.

``` bash
43 6 * * * certbot renew --post-hook "/bin/systemctl restart nginx"
```
