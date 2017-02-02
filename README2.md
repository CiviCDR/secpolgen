Security policy generator
======================

Security policy generator application built with AngularJS.

### Dependencies
* AngularJS
* Bootstrap
* Grunt

### Technical Details

form-service (gets policy properties from json and holds array of potential fields for creating a new policy), form-directive and field-directive are important.

Getting the policy variable, use in form-directive as follows:

```
<form-directive form="form"> </form-directive>
```

In form-directive, use field-directive:

```
<div ng-repeat="field in form.fields">
   <field-directive field="field"> </field-directive>
</div>
```

Form directive checks field type and puts template between directive tags.

```JAVASCRIPT
switch(type) {
     case 'textfield':
         templateUrl = './views/directive-templates/field/textfield.html';
         break;
     case 'email':
         ...
```

Result:

```html
<form-directive form="form" class="ng-isolate-scope ng-scope">
   ...
   <form name="myForm" id="myForm">
      ...
      <div ng-repeat="field in form.fields">
         <field-directive field="field">
            ...
         </field-directive>
      </div>
   </form>
</form-directive>
```
