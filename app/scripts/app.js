'use strict';

var angularApp = angular.module('secPolGen', ['ui.bootstrap', '$strap.directives', "xeditable"]);

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

}).run(['$rootScope',  function(editableOptions) {  editableOptions.theme = 'bs3';}]);
