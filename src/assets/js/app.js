(function (doc) {
    'use strict';

    angular.module('app', ['viewport'])
        .controller('HomeController', HomeController);

    function HomeController($scope, viewport, $log, DataFactory) {
        var vm      = this,
            results = doc.getElementById('viewport-type'),
            body    = doc.body;

        $scope.viewportType = viewport.getType();
        $scope.data = [];

        // init based on viewport size
        getData();

        body.classList.add('viewport-' + viewport.getType());

        viewport.watchViewport(function () {
            $scope.$apply(function () {
                $scope.viewportType = viewport.getType();
            });

            getData();

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

        function getData() {
            if (viewport.getType() === 'handheld') {
                DataFactory.getSmallData()
                .then(function (response) {
                    $log.info('data:', response);
                    $log.info('Viewport type:', viewport.getType());
                    $scope.data = response;
                });
            }

            if (viewport.getType() === 'tablet') {
                DataFactory.getMediumData()
                .then(function (response) {
                    $log.info('data:', response);
                    $log.info('Viewport type:', viewport.getType());
                    $scope.data = response;
                });
            }

            if (viewport.getType() === 'widescreen') {
                DataFactory.getBigData()
                .then(function (response) {
                    $log.info('data:', response);
                    $log.info('Viewport type:', viewport.getType());
                    $scope.data = response;
                });
            }
        }
    }
}(document));