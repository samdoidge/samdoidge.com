---
layout: post
title: Auto reload with Grunt
comments: True
tags: [tech]
---

![no-margin](/assets/grunt-logo.png)

### What is Grunt? ###

A 'task runner' - it helps us with reptitive tasks through automation, running from the command line.

### Why use Grunt? ###

Reloading web pages after an code change does not take long but the time and extra actoins required builds up, we can automate this process with Grunt - especially effective when working with 2 screens. Additionally we can add further automation, SASS to CSS, minification etc.

### Do not have Node.js or Grunt? ###

You will need Node.js installed with npm on your system: [Node installation instructions](http://nodejs.org/)

I'm linking to the [Grunt installation instructions](http://gruntjs.com/getting-started#installing-the-cli), this is fairly straight forward, the useage I will explain as it was not plain sailing.

### Setup auto reload ###

grunt-contrib-watch is the plugin we will use, install on your system with:
<pre><code class="language-bash">npm install grunt-contrib-watch --save-dev
</code></pre>
Grunt needs 2 files for use in a project - ```package.json``` and ```Gruntfile.js```

You will need to add ```grunt-contrib-watch``` to your ```package.json``` so your file contains the following:
``` js
"devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-watch": "^0.6.1"
  }
```

With the plugin as a dependancy in package.json, you can now install the dependency for your project by running the following command:
``` bash
npm install
```

The last step of the plugin installation is to configure your ```Gruntfile.js```. I am watching all css and php files within the directory and have included our plugin at the bottom of the file, contents of the file:
``` js
module.exports = function(grunt) {
grunt.initConfig({
  watch: {
    options: {
      livereload: 35729
      },
    elements: {
      files: ['**/*.css','**/*.php']
    },
  },
});
  grunt.registerTask('default', ['watch']);

  grunt.loadNpmTasks('grunt-contrib-watch');
};
```

Now having grunt setup for live reload, how does the browser no how to refresh? We can include a script at the bottom of our site:
``` html
<script src="http://localhost:35729/livereload.js"></script>
```
or my prefered method, a chrome extension: [Chrome Live Reload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) as this doesn't require as adding additional code to our site.

### Run the thing! ###

After all that setup, let's run it.

The following will work as we have 'default' set as a registerTask. Run this via command line in your project root:
<pre><code class="language-bash">grunt
</code></pre>
