var viewport = {
    init: function () {
        'use strict';
        
        this.timer = 0;
        this.the_body = document.body;
        this.og_body_class = this.the_body.className;

        // fire method on window resize once the resize event completes
        if (typeof(addEventListener) === 'function') {
            window.addEventListener('resize', function () {
                clearTimeout(viewport.timer);
                viewport.timer = setTimeout(viewport.respond, 100);
            }, false);
        }
    },

    respond: function () {
        'use strict';

        viewport.the_body.className = viewport.og_body_class + ' ' + viewport.getType();

        if (viewport.getType() === 'tablet' || viewport.getType() === 'widescreen') {
            // do stuff if viewport is handheld
        }
    },

    getType: function () {
        'use strict';
        
        var size, tablet, desktop, viewport_type;

        if (typeof getComputedStyle === 'function' || typeof matchMedia === 'function') {
            size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');

            if (size !== '') {
                if (size.indexOf('tablet') !== -1) {
                    viewport_type = 'tablet';
                } else if (size.indexOf('widescreen') !== -1) {
                    viewport_type = 'widescreen';
                } else {
                    viewport_type = 'handheld';
                }
            } else {
                // match media
                tablet  = window.matchMedia("screen and (min-width: 47.5em)");
                desktop = window.matchMedia("screen and (min-width: 68.75em)");

                if (tablet.matches === false && desktop.matches === false) {
                    viewport_type = 'handheld';
                } else if (tablet.matches === true && desktop.matches === false) {
                    viewport_type = 'tablet';
                } else {
                    viewport_type = 'widescreen';
                }
            }


        } else {
            viewport_type = 'widescreen';
        }

        return viewport_type;
    }
};
