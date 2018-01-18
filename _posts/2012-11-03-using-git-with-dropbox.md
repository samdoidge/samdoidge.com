---
layout: post
title: Using Git with Dropbox
comments: True
---

<code>
**2014:** I now just use Bitbucket.
</code>

**note:** I’ve set this up on Mac OS X.

I’ve cancelled my beanstalkapp subscription, gone for a paid Dropbox one, and am moving my repos to Dropbox.
``` bash
cd ~/Dropbox
mkdir -p Sites/your-repo-name/your-repo-name.git
cd your-repo-name
git --bare init
```
This creates your Git repository in Dropbox. (change Sites + myrepo to your preference). Next I go into my local folder and add this to the Dropbox repo:
``` bash
cd ~/Sites/projectfolder
git init .
git add .
git commit -m "Initial commit"
git remote add dropbox ~/Dropbox/Sites/your-repo-name/
git push dropbox master
```
You should now have a local copy of your remote repo already configured with your dropbox remote. You can start making changes to your project and when ready, push them back to the remote:
``` bash
git push dropbox master
```
And finally, when you want to sync the remote repository with your local copy, you can:
``` bash
git pull dropbox master
```
To take a clone a copy of your project to your current directory:
``` bash
git clone -o dropbox ~/Dropbox/Sites/your-repo-name/  
```
The one downside to this is not being able to clone-to or pull from your repo on a remote server. For this I simply scp from my local to remote server for deployment.
``` bash
scp -rp ~/Sites/projectfolder username@serverip:/project/path
```

**Update:** The following guide allows you to have Dropbox running on a remote linux server: [Dropbox on remote server](http://buildcontext.com/blog/2012/dropbox-linux-ubuntu-ec2-linode-selective-sync). I am only syncing my Sites folder on the server and it works swimmingly. Pro tip: When linking your server – keep the service running on until it says successful – stopping it won’t link the server. One issue is syncing time between your server – it can be few minutes to sync – not due to size but just time between checks

**Precaution:** A possible issue with using Git with Dropbox is keeping your data in sync – ensure your Dropbox repository’s are in sync (green tick) before pushing or pulling to the them.

This guide is a crude amalgamation of two nice and simple guides I googled, [FreshMob – Using Dropbox as a Git repository](https://freshmob.com.au/using-dropbox-as-a-git-repository/), [Bradley Wright – Using Dropbox as a Git repository](http://tumblr.intranation.com/post/766290743/using-dropbox-git-repository) but it has been working for me.
