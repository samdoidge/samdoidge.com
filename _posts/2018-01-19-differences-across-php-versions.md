---
layout: post
title: 'Differences across PHP versions'
image: /assets/php-logo.png
comments: True
tags: [tech]
---

<p style="text-align: center">
	<img src="/assets/php-versions-composer-2017-02.png?style=seventyfive">
</p>


Now PHP 7.2 has arrived, and the previous versions are still in use, as shown above [[1](#sources)], I thought I would cover the differences between the versions now out there. I will be highlighting what I see as the most relevant changes to a PHP developer across the versions, and not a full comprehensive list.

### PHP 7.0
------
PHP 7.0 was a long awaited update, introducing a huge speed increase (100% faster on Wordpress-based benchmarks) and many helpful language features.

#### New Type Hints
The new type hints were: `int`, `float`, `string`, and `bool`, in addition to the existing `array` and class name hints.

They are used as below:
``` php
function getTotal(float $a, float $b) {
	return $a + $b;
}
```

These Type Declarations can make code easier to read and forces things to be used in the way they were intended.

The above example tells us the function requires two float arguments to be passed. We can pass a string '2' here and this will be used as Strict Type has not been set before this function. If we had set it, as below:
``` php
declare(strict_types=1);
```
Passing a string of `'hi'` into this function would have thrown a `TypeError`. Strict is determined by the file in which the call to a function is made, not the file in which the function is defined. By default, scalar type-declarations are non-strict, which means they will attempt to change the original type to match the type specified by the type-declaration.

#### Return Type Declarations

You can now set the type a function should return. The same types used in arguments are available here. If strict typing is not set, it will try and convert the return type to an int in the below example, throwing a `TypeError` if this is not possible.

``` php
function getTotal(float $a, float $b) : int {
```

#### Error Handling

PHP 7 now allows some fatal errors to be caught, which was not the case in PHP 5.x.

Fatal errors still exist for certain conditions, such as running out of memory, and still behave as before by immediately stopping the script. An uncaught exception will also continue to be a fatal error in PHP 7. This means if an exception thrown from an error that was fatal in PHP 5 goes uncaught, it will still be a fatal error in PHP 7.

In PHP 7, Error and Exception both implement the new Throwable class. This means you can now use Throwable in try/catch blocks to catch both Exception and Error objects.
Below is a catch-all block to catch Errors and Exceptions.

``` php
try {
   // Code that may throw an Exception or Error.
} catch (Throwable $t) {
   // Executed only in PHP 7
}
```


#### New Operators

##### The spaceship operator `< = >`

The spaceship operator can do 3 checks in one operator, returning a different value depending on which check is met. These are the standard: less than, equals, and greater than operators. `-1`, `0`, and `1` are returned respectively, depending which check is passed:

``` php
$compare = 2 <=> 1
// 2 < 1? return -1
// 2 = 1? return 0
// 2 > 1? return 1
```

##### The null coalesce operator `??`

If $firstName is set and not null, it will assign this variable to the $name variable, otherwise 'Guest' will be used. This saves writing code with if statements to achieve the same result

``` php
$name = $firstName ??  "Guest";
```

They can also be stacked to check multiple variables!
``` php
$name = $firstName ?? $username ?? $placeholder ?? “Guest”;
```
This operator looks explicitly for `null` or does not exist. It will pick up an empty string.

#### Cryptographically Secure PseudoRandom Number Generator

There are random number generators in PHP, rand() for instance, but none of the options in version 5 are very secure. In PHP 7, they put together a system interface to the operating system’s random number generator. Because we can now use the operating system’s random number generator, if that gets hacked we have bigger problems. It probably means your entire system is compromised and there is a flaw in the operating system itself.

Below are the two secure random functions:


##### random_int
``` php
random_int(1,10);
```

Returns a random int between and including 1 and 10.

##### random_byte
``` php
random_bytes(5);
```

This will return a string of the length specified. You will probably want to combine with another function to produce a more legible string.


These are not all the changes listed in PHP 7.0, but the ones I most make used of. Additional data can be found on the php.net website [[2](#sources)].


### PHP 7.1
------
#### Nullable Types

Types can now return null or something else if preceded with a question mark, this work for return types and arguments:

``` php
function answer(): ?int  {
    return null; //ok
}

function answer(): ?int  {
    return 42; // ok
}

function answer(): ?int {
    return new stdclass(); // error
}
```

Another thing you should keep in mind is that when overriding or implementing methods, you can’t add the nullable type to the return type, but you’re allowed to remove it. And the reverse is true for arguments, you can’t remove the nullable type from arguments, but you’re allowed to add it!

``` php
interface Fooable {
    function foo(): ?Fooable;
}
interface StrictFooable extends Fooable {
    function foo(): Fooable; // valid
}

interface Fooable {
    function foo(): Fooable;
}
interface LooseFooable extends Fooable {
    function foo(): ?Fooable; // invalid
}
```

#### Void Return Type

This is my favourite addition with this release. Instead of not declaring a return type for functions that return nothing, you can now specify `void`:

``` php
function should_return_nothing(): void {
    return 1; // Fatal error: A void function must not return a value
}

function lacks_return(): void {
    // valid
}

function returns_nothing(): void {
    return; // valid
}

function returns_null(): void {
    return null; // Fatal error: A void function must not return a value
}
```

#### Class Constant Visibility

We can now specify `public`, `private`, `protected` on class constants, just like class properties.

``` php
class Token {
    // Constants default to public
    const PUBLIC_CONST = 0;

    // Constants then also can have a defined visibility
    private const PRIVATE_CONST = 0;
    protected const PROTECTED_CONST = 0;
    public const PUBLIC_CONST_TWO = 0;

    //Constants can only have one visibility declaration list
    private const FOO = 1, BAR = 2;
}
```

#### ArgumentCountError Exception
Calling a function without the correct number of arguments will now throw an ArgumentCountError exception, instead of a warning.
``` php

function sum($a, $b)
{
    return $a + $b;
}
var_dump(sum(null, null)); // NULL
var_dump(sum()); Uncaught ArgumentCountError: Too few arguments to function sum()..
```

#### Catching Multiple Return Types

The new catch block syntax allows multiple catches, separated with `|`:
``` php
try {
    $user->payMonth($month);
} catch (PaidMonthException | UserSuspendedException $ex) {
    DB::rollBack();
}
```

#### Invalid String Arithmetics

7.1 will now give warnings for Arithmetics with strings which are not well formatted.

``` php
var_dump("1" + "a string"); // Warning: A non-numeric value encountered...
var_dump("1" + "2  with a string"); // Notice: A non well formed numeric value encountered...
```

#### Deprecated features

##### mcrypt
The mcrypt extension has been abandonware for nearly a decade now, and was also fairly complex to use. It has therefore been deprecated in favour of OpenSSL, where it will be removed from the core and into PECL in PHP 7.2.

This is quite a big change, as frameworks such as Laravel currently require this extension.




### PHP 7.2
------
#### New Type Declaration

`object` has been added as an type, available for argument type declaration and return type declaration. Useful if you do not want to specify specific class names.

``` php
function test(object $obj) : object
{
    return new SplQueue();
}

test(new StdClass());
```

#### Abstract Method Overriding

Abstract methods can now be overridden when an abstract class extends another abstract class. Contravariance allows widening of the accepted argument types as classes are extended down from the parent. Contravariance allows the narrowing of accepted types as classes are inherited.

``` php
<?php

abstract class A
{
    abstract function test(string $s);
}
abstract class B extends A
{
    // overridden - still maintaining contravariance for parameters and covariance for return
    abstract function test($s) : int;
}
```

#### Parameter Type Widening

Parameter types from overridden methods and from interface implementations may now be omitted. This means we don't need to specify argument types in classes extending a parent class.

``` php
<?php

interface A
{
    public function Test(array $input);
}

class B implements A
{
    public function Test($input){} // type omitted for $input
}
```

#### Deprecated Features

##### Unquoted Strings

Unquoted strings that are non-existent global constants are taken to be strings of themselves. This behaviour used to emit an E_NOTICE, but will now emit an E_WARNING. In the next major version of PHP, an Error exception will be thrown instead.

``` php
<?php

var_dump(NONEXISTENT);

/* Output:
Warning: Use of undefined constant NONEXISTENT - assumed 'NONEXISTENT' (this will throw an Error in a future version of PHP) in %s on line %d
string(11) "NONEXISTENT"
*/
```

#### Sources
----

I thank my sources below, as I have borrowed heavily from some. Comprehensive changes are available from the PHP documentation website.

1. [PHP Versions Stats - 2017.2 Edition](https://seld.be/notes/php-versions-stats-2017-2-edition)

2. [PHP 7.0 - New Features](http://php.net/manual/en/migration70.new-features.php)

3. [5 New Features in PHP 7](http://blog.teamtreehouse.com/5-new-features-php-7)

4. [What's new and exciting in PHP 7.1](https://www.sitepoint.com/whats-new-and-exciting-in-php-7-1/)

5. [PHP 7.1](https://laravel-news.com/php-7-1)

6. [PHP RFC: Parameter Type Widening](https://wiki.php.net/rfc/parameter-no-type-variance)

7. [What’s New in PHP 7.2](https://kinsta.com/blog/php-7-2/)
