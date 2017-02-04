'use strict';

angularApp.directive('formDirective', function () {
    return {
        controller: function($scope){
            $scope.submit = function(){
                alert('Building your policy...');
                $scope.form.submitted = true;
                var org = $scope.form.org_name;
                createPolicy();
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

function createPolicy() {
  // var policy = document.getElementById('submittedPolicy');
  // policy = policy.innerText;

  var org_html = document.getElementById("policyArea").innerText;
  var new_html = "<textarea id='copyablePolicy'>" + org_html + "</textarea>";
  document.getElementById("policyArea").innerHTML = new_html;


  // var editablePolicy = '<textarea>'+policy+'<textarea>';
  // var newContainer = container.appendChild(editablePolicy);

  var str = org_html;
  var newstr = str.replace(/the/i, 'Christmas');
  console.log(newstr);

  // var toReplace = '[ORGANISATION]';
  // var replaceWith = 'orgName';
  //
  // policy.innerText = policy.innerText.replace(toReplace, replaceWith);
}
