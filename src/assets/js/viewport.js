(function () {
    'use strict';

    var timer = 0, viewport = {};

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

            if (size.indexOf('tablet') !== -1) {
                viewport_type = 'tablet';
            } else if (size.indexOf('widescreen') !== -1) {
                viewport_type = 'widescreen';
            } else {
                viewport_type = 'handheld';
            }
        } else {
            viewport_type = 'widescreen';
        }

        return viewport_type;
    }

    viewport = {
        startResize: startResize,
        getType: getType
    };

    return viewport;
}());