(function (global, doc) {
    'use strict';

    angular.module('app', ['viewport'])
        .controller('HomeController', HomeController);

    function HomeController($scope, viewport, $log, DataFactory) {
        var vm            = this,
            results       = doc.getElementById('viewport-type'),
            body          = doc.body;

        $scope.viewportType = viewport.getType();
        $scope.data         = [];
        $scope.hasSidebar   = false;

        // init based on viewport size
        getData();
        setLayoutState();

        body.classList.add('viewport-' + viewport.getType());

        viewport.watchViewport(function () {
            $scope.$apply(function () {
                $scope.viewportType = viewport.getType();
            });

            getData();
            setLayoutState();

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
            if (viewport.getType() === 'handheld' || viewport.getType() === 'mini') {
                DataFactory.getSmallData()
                .then(function (response) {
                    $scope.dataListSize = 'Less data is loaded for ' + viewport.getType();
                    $scope.data = response;
                });
            }

            if (viewport.getType() === 'mini') {
                $scope.dataListSize = 'Less data is loaded for ' + viewport.getType();
            }

            if (viewport.getType() === 'tablet') {
                DataFactory.getMediumData()
                .then(function (response) {
                    $scope.dataListSize = 'More data is loaded for ' + viewport.getType();
                    $scope.data = response;
                });
            }

            if (viewport.getType() === 'widescreen') {
                DataFactory.getBigData()
                .then(function (response) {
                    $scope.dataListSize = 'The most data is loaded for ' + viewport.getType();
                    $scope.data = response;
                });
            }
        }

        function setLayoutState() {
            if (viewport.getType() === 'widescreen') {
                $scope.hasSidebar = true;
            } else {
                $scope.hasSidebar = false;
            }
        }
    }
}(window, document));