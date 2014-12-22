---
layout: post
title: Public, private and protected in PHP
comments: True
description: To answer the question, on anything more complex than a one page site it is worth using Sass. There is a tiny learning curve, native CSS works in Sass, Sass just adds to CSS.
---

Not the most interesting post but essential for OOP PHP development: 

* <code>public</code> scope to make that variable/function available from anywhere, other classes and instances of the object.

* <code>private</code> scope when you want your variable/function to be visible in its own class only.

* <code>protected</code> scope when you want to make your variable/function visible in all classes that extend current class including the current class.

### Examples ###

Our first class:

{% highlight php %}
<?php
Class Plant {
	public $height = 'Tall';
	private $leaves = 'Long';
	protected $colour = 'Green';
}
?>

{% endhighlight %}

If we try accessing the properties, we get the following:
{% highlight php %}
<?php
$plant = new Plant; 
echo $plant->height;
?>
// Output: 'Tall'
{% endhighlight %}

{% highlight php %}
<?php
$plant = new Plant; 
echo $plant->leaves;
?>
// Output: Fatal error:  Cannot access private property Plant::$leaves on line
{% endhighlight %}

{% highlight php %}
<?php
$plant = new Plant; 
echo $plant->colour;
?>
// Output: Fatal error:  Cannot access protected property Plant::$colour on line
{% endhighlight %}


To show how the scope setting works with extended classes, we extend our Plant class with Flower and create a function to display our variables. 

{% highlight php %}
<?php
Class Flower extends Plant {

	function display() {
		echo $this->height;
	}
}
?>
{% endhighlight %}

Using out function we get the following:
{% highlight php %}
<?php
$flower = new Flower; 
echo $flower->display();
?>
// Output: 'Tall'
{% endhighlight %}

Changing our echo'd variable in the function display() to ```$this->leaves``` we get nothing echo'd - as the variable is ```private``` - only available to the class it is declared in.


{% highlight php %}
<?php
Class Flower extends Plant {

	function display() {
		echo $this->colour;
	}
}

$flower = new Flower; 
echo $flower->display();
?>
// Output: 'Green'
{% endhighlight %}




### Basically ###
<code>public</code> can be accessed and changed from outside the class. This cannot happen with <code>private</code> or <code>protected</code> :)

Taken from [this stackoverflow question](http://stackoverflow.com/questions/4361553/php-public-private-protected) with a minor improvement.