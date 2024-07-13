---
layout: post
title: "Jekyll with Docker"
---

Since moving to a new Mac, pulling down my blog to make a post - I really didn't want to deal with configuring the environment to run Jekyll locally again. It won't be the last machine I have to configure this on, and it's not a systematic solution, in my mind.

The solution: Use a Docker image.

I create a `docker-compose.yml` file at the root of my blog, and added the following:

```yml
version: '3.3'
services:
  jekyll:
    volumes:
        - './:/srv/jekyll'
    ports:
        - '4000:4000'
        - '35729:35729'
    image: jekyll/jekyll
    command: jekyll serve --livereload --force_polling
```

I did run into errors, such as:
```sh
find_spec_for_exe': Could not find 'bundler' (1.16.4) required by your /srv/jekyll/Gemfile.lock.
```
and

```sh
Bundler could not find compatible versions for gem "bundler":
    In Gemfile:
      bundler (~> 1.12)

     Current Bundler version:
      bundler (2.2.24)
```

I resolve these by deleting my local Gemfile.lock, and also a redundant Jekyll theme file I was using.

Thank you to [Stephan](https://svrooij.io/2020/12/31/github-pages-live-reload/) for making this a quick Google. I made an edit to his `docker-compose.yml` file as it seems [--livereload and --incremental do not work together](https://github.com/jekyll/jekyll/issues/6701#issuecomment-487313636)


