---
layout: post
title: 'HTTP API Methods'
image: /assets/php-logo.png
---

<p style="text-align: center">
	<img src="/assets/rest.png?style=seventyfive">
</p>

I thought I would go over REST HTTP methods as things have changed slightly since I first started implementing them.

REST (Representational State Transfer) advocates that web applications should use HTTP as it was originally envisioned, and this architecture overtook SOAP for API use, due to having less overhead and being simpler to use.


### The Methods

Key to the architecture are the methods. Listed below are the HTTP verbs with their corresponding CRUD (Create, Read, Update, Delete) API action.


| HTTP VERB        | CRUD           |
| ------------- |-------------|
| GET      | Read |
| POST	| Create     |
| PUT     | Update -> Replace       |
| PATCH	| Update -> Modify     |
| DELETE	| Delete     |

The URL used for a REST API will typically be something like: `/products/{id}` for specific items, or entire collections through `/products/`.

#### GET

This is used to read / retrieve a resource. GET (along with HEAD) requests are used only to read data and not change it. GET should only be used for safe operations - ones which do not change the data.

HTTP status codes 200 (Ok) or 404 (Not found) should typically be returned to a GET request.

#### POST

POST should be used to create new resources.

HTTP status codes 201 (Created) or 404 (Not found) / 409 (Conflict) - if the resource already exists should typically be returned to a POST request.

#### PUT

PUT is used to update a resource, normally by replacing the entire resource with content sent on the body of this HTTP request.

HTTP status codes 200 (Ok) or 404 (Not found) should typically be returned to a PUT request.

#### DELETE

DELETE matches it's CRUD operation exactly. This request should delete the resource specified in the URL, i.e. `/products/{id}`.

HTTP status codes 200 (Ok) or 404 (Not found) should typically be returned to a DELETE request.

#### PATCH

PATCH was introduced to HTTP in 2010. You may think this is similar to PUT as it does an update, but this was introduced to allow updating without replacing the entire resource. Useful to save on transfer overhead.

The PATCH body should not just be a modified part of the resource, but in some kind of patch language like JSON Patch or XML Patch.

HTTP status codes 200 (Ok) or 404 (Not found) should typically be returned to a PATCH request.


#### HEAD

This is a less-used verb. HEAD is almost identical to GET, but it will normally be used to just get information about a collection / resource without returning the content itself.


#### OPTIONS

This request is rarely used, I will quote the HTTP Spec [1]:

> This method allows the client to determine the options and/or requirements associated with a resource, or the capabilities of a server, without implying a resource action or initiating a resource retrieval.

Effectively you would want to return some documentation here of how to use the API you have implemented.

#### body

HTTP requests can contain data in the `body`. This is where you may specify how a resource should be updated in a PATCH request, for example. Some API's choose to return relevant data in the `body` of a response, which does consume more bandwidth.


This will conclude my brief overview of HTTP methods. There is more to expand on REST API's, but there are brilliant resources out there for this.


#### Sources
----

I thank my sources below.

1. [RFC2616,](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)

2. [Using HTTP Methods for RESTful Services](http://www.restapitutorial.com/lessons/httpmethods.html)
