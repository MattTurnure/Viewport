(function () {
    'use strict';

    angular.module('app')
        .directive('sidebar', sidebar);

    function sidebar() {
        return {
            scope: {},
            templateUrl: 'demo/sidebar.html'
        };
    }
}());