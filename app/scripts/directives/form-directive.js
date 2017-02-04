'use strict';

angularApp.directive('formDirective', function () {
    return {
        controller: function($scope){
            $scope.submit = function(){
                alert('Building your policy...');
                $scope.form.submitted = true;
                var org = $scope.form.org_name;
                createPolicy(org);
            }

            $scope.cancel = function(){
                alert('Form canceled..');
            }
        },
        templateUrl: './views/directive-templates/form/form.html',
        restrict: 'E',
        scope: {
            form:'='
        }
    };
  });

function createPolicy(orgName) {
  var policy = document.getElementById('submittedPolicy');
  policy = policy.innerText;
  var container = document.getElementById('policyContainer');

  // var editablePolicy = '<textarea>'+policy+'<textarea>';
  // var newContainer = container.appendChild(editablePolicy);

  var str = policy;
  var newstr = str.replace(/the/i, 'Christmas');
  console.log(newstr);

  // var toReplace = '[ORGANISATION]';
  // var replaceWith = 'orgName';
  //
  // policy.innerText = policy.innerText.replace(toReplace, replaceWith);
}
