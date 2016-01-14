(function () {
    'use strict';

    angular.module('viewport', [])
        .factory('viewport', viewport);

    function viewport() {
        var timer = 0,
            types = ['handheld', 'mini', 'tablet', 'widescreen'];

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
            var len = types.length,
                content;

            if (typeof getComputedStyle === 'function') {
                content = window.getComputedStyle(document.body, ':after').getPropertyValue('content');

                while (len--) {
                    if (content.indexOf(types[len]) !== -1) {
                        return types[len];
                    }
                }
            }

            return types[0];
        }
    }
}());