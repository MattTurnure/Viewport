(function () {
    'use strict';

    var timer = 0, viewport = {}, types = ['handheld', 'tablet', 'widescreen'];

    function startResize(cb) {
        // fire method on window resize once the resize event completes
        if (typeof(addEventListener) === 'function') {
            window.addEventListener('resize', function () {
                clearTimeout(timer);
                timer = setTimeout(cb, 100);
            }, false);
        }
    }

    function getType() {
        var size, viewport_type;

        if (typeof getComputedStyle === 'function') {
            size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');

            if (size.indexOf(types[1]) !== -1) {
                viewport_type = types[1];
            } else if (size.indexOf(types[2]) !== -1) {
                viewport_type = types[2];
            } else {
                viewport_type = types[0];
            }
        } else {
            viewport_type = types[2];
        }

        return viewport_type;
    }

    viewport = {
        startResize: startResize,
        getType: getType,
        types: types
    };

    window.viewport = viewport;
}());