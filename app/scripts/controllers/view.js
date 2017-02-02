'use strict';

var ViewCtrl = angularApp.controller('ViewCtrl', function ($scope, FormService, $routeParams) {
    $scope.form = {};

    // read form with given id
    FormService.form($routeParams.id).then(function(form) {
        $scope.form = form;
    });

    // accordion settings
    $scope.accordion = {}
    $scope.accordion.oneAtATime = true;

});
