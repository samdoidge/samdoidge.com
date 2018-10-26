---
layout: post
title: "Angular 6 and Font Awesome"
comments: True
---

Continuing with my screencast 'series' - the best way to integrate Font Awesome and Angular, this is simple and quick, shown on a fresh installation.

<p style="text-align: center">
<div class='embed-container'><iframe src='https://www.youtube.com/embed/HCCos5odyqg' frameborder='0' allowfullscreen></iframe></div>
</p>


Install the Font Awesome packages:
```npm install @fortawesome/fontawesome-svg-core --save\nnpm install @fortawesome/free-solid-svg-icons --save\nnpm install @fortawesome/angular-fontawesome --save```


Import the following within app.module.ts:
```import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);```

Add `FontAwesomeModule` to the imports section.

Example icons:
```
<ul>
  <li><fa-icon icon="coffee" size="3x"></fa-icon></li>
  <li><fa-icon icon="check"></fa-icon></li>
  <li><fa-icon icon="spinner" spin="true" size="3x"></fa-icon></li>
  <li><fa-icon icon="envelope" rotate="90"></fa-icon></li>
  </ul>
```

More usage details at <a href="https://github.com/FortAwesome/angular-fontawesome">https://github.com/FortAwesome/angular-fontawesome</a>