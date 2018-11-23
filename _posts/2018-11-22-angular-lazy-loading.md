---
layout: post
title: "Lazy Loading in Angular 6"
comments: True
---

This is a quick video of lazy loading working for Angular 6 routes. It is used when routing to feature modules, and stops the modules being initiliased before they are needed.

```const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  }
  ]```

Is how a lazy loaded `CustomersModule` would look - the key is the loadChildren, and a the path to the to the feature module you want to lazy loaded being entered as a string.
<p style="text-align: center">
<div class='embed-container'><iframe src='https://www.youtube.com/embed/8YclmiVy5Uw' frameborder='0' allowfullscreen></iframe></div>
</p>
