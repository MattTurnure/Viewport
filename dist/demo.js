/* global viewport, document */

(function (doc) {
    'use strict';

    var results = doc.getElementById('viewport-type'),
        body    = doc.body;

    results.innerHTML = viewport.getType();
    body.classList.add('viewport-' + viewport.getType());

    viewport.watchViewport(function () {
        results.innerHTML = viewport.getType();

        if (typeof body.classList === 'object') {
            resetViewportBodyClass();
            body.classList.add('viewport-' + viewport.getType());
        }
    });

    function resetViewportBodyClass() {
        var len = viewport.types.length;

        while (len--) {
            body.classList.remove('viewport-' + viewport.types[len]);
        }
    }
}(document));