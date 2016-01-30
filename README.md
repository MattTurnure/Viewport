Viewport
========

This module creates variables within CSS media queries that you can use to sync up your width-sensitive JavaScript methods on load and resize events.

## Installation ##

Via NPM: `npm install viewport-angular`

## Basic Usage ##

1. Add this in your head tag:
    `<link rel="stylesheet" href="[assetsPath]/viewport.css">`
2. Add this after your reference to Angular:
    `<script src="[assetsPath]/viewport.js" ></script>`

Once everything is bootstrapped, dependency inject `viewport` into your app.

Check out the [demo](http://mattturnure.github.io/Viewport/).

### Methods ###

There are two methods that viewport returns: `watchViewport` and `getType`.

`getType` returns the string value based on the viewport width. Example:

`console.log(viewport.getType()); // possible values include handheld, mini, tablet, widescreen`

`watchViewport` starts a resize event that you can pass a callback to. Example:

```
viewport.watchViewport(function () {
    if ( viewport.getType() === 'handheld' ) {
        // doSomeHandheldThing();
    }

    if ( viewport.getType() === 'mini' ) {
        // doSomeMiniThing();
    }

    if ( viewport.getType() === 'tablet' ) {
        // doSomeTabletThing();
    }

    if ( viewport.getType() === 'widescreen' ) {
        // doSomeWidescreenThing();
    }
});
```

