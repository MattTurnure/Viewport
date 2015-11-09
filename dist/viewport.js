(function () {
    'use strict';

    angular.module('viewport', [])
        .factory('viewport', viewport);

    function viewport() {
        var timer = 0,
            types = ['handheld', 'tablet', 'widescreen'];

        return {
            watchViewport: watchViewport,
            getType: getType,
            types: types
        };

        function watchViewport(cb) {
            // fire method on window resize once the resize event completes
            if (typeof addEventListener === 'function') {
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
    }
}());