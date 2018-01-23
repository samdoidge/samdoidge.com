---
layout: post
title: 'PHP Interfaces and Abstract classes'
image: /assets/php-logo.png
comments: True
---

<p style="text-align: center">
	<img src="/assets/php-logo.png?style=fifty">
</p>


This is a post to run through some of language features PHP provides for object oriented programming.

### Interfaces
------

Object interfaces allow you to create code which specifies which methods a class must implement, without having to define how these methods are handled.

Interfaces enforce a `contract`, letting us know which methods will exist without us having to know anything else about a class. This allows us to `interface` with classes we wouldn't otherwise know about.

Interfaces are defined in the same way as a class, but with the interface keyword replacing the class keyword and without any of the methods having their contents defined.

* All methods declared in an interface must be public; this is the nature of an interface.
* When a normal class implements an interface, it must implement all methods of that interface.
* Interface constants works exactly like class constants except they cannot be overridden by a class/interface that inherits them.
* It is possible to declare a constructor in an interface, normally for use by factories.

To expand on the usefulness of an interface:

You may create an interface, Cache, which defines what caches do. Next you may create several different implementations such as FileSystemCache, RedisCache, and MemcachdCache.

The code that wants to cache information only uses the Cache interface. Maybe today the cache is implemented using the FileSystemCache object. As the website grows and traffic increases you see that a better cache system is required. Instead of rewriting all the places that are using the cache you can simply switch the creation of the cache from FileSystemCache to RedisCache.

``` php
interface Cache
{
    public function setLatest($name, $var);
    public function getLatest($template);
}

// Implement the interface
class FileSystemCache implements Cache
{
    private $vars = array();

    public function setLatest($name, $var)
    {
        $this->vars[$name] = $var;
    }

    public function getLatest($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }

        return $template;
    }
}
```

An interface can also extend other interfaces:

``` php
interface a
{
    public function foo();
}

interface b
{
    public function bar();
}

interface c extends a, b
{
    public function baz();
}

class d implements c
{
    public function foo()
    {
    }

    public function bar()
    {
    }

    public function baz()
    {
    }
}
```


The interface describes the methods that we need to access our database. It does not describe in any way how we achieve that. That's what the implementing class does. We can implement this interface as many times as we need in as many different ways as we need. We can then switch between implementations of the interface without impact to our code because the interface defines how we will use it regardless of how it actually works.

It can also be said that interfaces provide the design for a class with zero implementation.


### Abstract Classes
------

I'm taking much of the below direct from the PHP documentation website [[2](#sources)] as it is so concise and elegant.

Classes defined as abstract may not be instantiated, and any class that contains at least one abstract method must also be abstract. Methods defined as abstract simply declare the method's signature - they cannot define the implementation.

When inheriting from an abstract class, all methods marked abstract in the parent's class declaration must be defined by the child; additionally, these methods must be defined with the same (or a less restricted) visibility. For example, if the abstract method is defined as protected, the function implementation must be defined as either protected or public, but not private. Furthermore the signatures of the methods must match, i.e. the type hints and the number of required arguments must be the same. For example, if the child class defines an optional argument, where the abstract method's signature does not, there is no conflict in the signature. This also applies to constructors as of PHP 5.4. Before 5.4 constructor signatures could differ.

An Abstract Class is like a partially built class. It is much like a document with blanks to fill in.

``` php
<?php
abstract class AbstractClass
{
    // Our abstract method only needs to define the required arguments
    abstract protected function prefixName($name);

}

class ConcreteClass extends AbstractClass
{
    // Our child class may define optional arguments not in the parent's signature
    public function prefixName($name, $separator = ".") {
        $prefix = "Mr";
        return "{$prefix}{$separator} {$name}";
    }
}

$class = new ConcreteClass;
echo $class->prefixName("Pacman"), "\n";
```

Abstract classes can provide some design, with some implementation. Abstract classes are most useful where child classes share some implementation similarities, but differ in certain implementations.

### Interface Vs Abstract

So what is the difference?

An abstract class **can provide some functionality** and actual implementation of methods, where as an interface cannot contain any functionality.


#### Sources
----

I thank my sources below, as I have borrowed heavily from some. Comprehensive changes are available from the PHP documentation website.

1. [PHP Object Interfaces](http://php.net/manual/en/language.oop5.interfaces.php)

2. [PHP Class Abstraction](http://php.net/manual/en/language.oop5.abstract.php)
