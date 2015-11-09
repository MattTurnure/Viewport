(function (doc) {
    'use strict';

    angular.module('app', ['viewport'])
        .controller('HomeController', HomeController);

    function HomeController($scope, viewport, $log) {
        var vm      = this,
            results = doc.getElementById('viewport-type'),
            body    = doc.body;

        $scope.viewportType = viewport.getType();

        body.classList.add('viewport-' + viewport.getType());

        viewport.watchViewport(function () {
            $scope.$apply(function () {
                $scope.viewportType = viewport.getType();
            });

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
    }
}(document));