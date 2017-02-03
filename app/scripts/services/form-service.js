'use strict';

angularApp.service('FormService', function FormService($http) {

    var formsJsonPath = './static-data/sample_forms.json';

    return {
        fields:[
            {
                name : 'purpose',
                value : ''
            },
            {
                name : 'relevanceStaff',
                value : ''
            },
            {
                name : 'relevanceSystems',
                value : ''
            },
            {
                name : 'maintenance',
                value : ''
            },
            {
                name : 'policyupdates',
                value : ''
            }
        ],
        form:function (id) {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get(formsJsonPath).then(function (response) {
                var requestedForm = {};
                angular.forEach(response.data, function (form) {
                    if (form.form_id == id) requestedForm = form;
                });
                return requestedForm;
            });
        },
        forms: function() {
            return $http.get(formsJsonPath).then(function (response) {
                return response.data;
            });
        }
    };
});
