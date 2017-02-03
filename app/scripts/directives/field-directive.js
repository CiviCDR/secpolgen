'use strict';

angularApp.directive('fieldDirective', function ($http, $compile) {

        var getTemplateUrl = function(field) {
            var type = field.field_type;
            var templateUrl = '';

            switch(type) {
                case 'text':
                    templateUrl = './views/directive-templates/field/text-only.html';
                    break;
                case 'radios':
                    templateUrl = './views/directive-templates/field/text-and-radios.html';
                    break;
                case 'inputs':
                    templateUrl = './views/directive-templates/field/text-and-inputs.html';
                    break;
            }
            return templateUrl;
        }

        var linker = function(scope, element) {
            // GET template content from path
            var templateUrl = getTemplateUrl(scope.field);
            $http.get(templateUrl).success(function(data) {
                element.html(data);
                $compile(element.contents())(scope);
            });
        }

        return {
            template: '<div>{{field}}</div>',
            restrict: 'E',
            scope: {
                field:'='
            },
            link: linker
        };
  });
