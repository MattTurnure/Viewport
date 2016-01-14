Viewport
========

Create variables within CSS media queries that you can use to sync up your width-sensitive JavaScript methods on page load as well as browser resize.

## Dependencies ##

Angular is the only dependency.

## Installation ##

Via Bower: <code>bower install Viewport#angular</code>

### Now ###
1. Add this in your head tag:
    < link rel="stylesheet" href="[assetsPath]/viewport.css">
2. Add this after your reference to Angular:
    < script src="[assetsPath]/viewport.js" ></script >

## Usage ##

Once everything is bootstrapped, dependency inject <code>viewport</code> into your app.

### Methods ###

There are two methods that belong to viewport: <code>watchViewport</code> and <code>getType</code>.

<code>getType</code> returns the string value based on the viewport width. Example:

    console.log(viewport.getType()); // possible values include handheld, mini, tablet, widescreen

<code>watchViewport</code> starts a resize event that you can pass a callback to. Example:

    viewport.watchViewport(function () {
        if ( viewport.getType() === 'tablet' ) {
            // doSomeTabletThing();
        }
    });

    viewport.watchViewport(function () {
        if ( viewport.getType() === 'widescreen' ) {
            // doSomeWidescreenThing();
        }
    });

