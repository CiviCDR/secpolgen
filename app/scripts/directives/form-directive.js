'use strict';

angularApp.directive('formDirective', function () {
    return {
        controller: function($scope){
            $scope.submit = function(){
                alert('Building your policy...');
                createPolicy();
                $scope.form.submitted = true;
                var org = $scope.form.org_name;
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

function updateText() {
  console.log($scope.form.form_fields);
  // for each field in form
  // if field_id isn't equal to 5,6,8 or 10
  // for each content_text in content
  // find the word [ORGANISATION]
  // replace it with orgName

}

function createPolicy() {
  // var policy = document.getElementById('submittedPolicy');
  // policy = policy.innerText;

  var org_html = document.getElementById("policyArea").innerText;
  var new_html = "<textarea id='copyablePolicy'>" + org_html + "</textarea>";
  document.getElementById("policyArea").innerHTML = new_html;


  var str = document.getElementById('myForm').innerText;
  str = str.replace(/(\[ORGANISATION\])/g, 'Christmas');
  // console.log(str);


  // var editablePolicy = '<textarea>'+policy+'<textarea>';
  // var newContainer = container.appendChild(editablePolicy);

  // var str = org_html;

  // var toReplace = '[ORGANISATION]';
  // var replaceWith = 'orgName';
  //
  // policy.innerText = policy.innerText.replace(toReplace, replaceWith);
}
