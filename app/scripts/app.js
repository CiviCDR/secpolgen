'use strict';

var angularApp = angular.module('angularjsFormBuilderApp', ['ui.bootstrap', '$strap.directives']);

angularApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/forms/:id/create', {
            templateUrl: 'views/view.html',
            controller: 'ViewCtrl'
        })
        // .when('/forms/:id/view', {
        //     templateUrl: 'views/view.html',
        //     controller: 'ViewCtrl'
        // })
        .otherwise({
            redirectTo: '/'
        });

}).run(['$rootScope',  function() {}]);
