'use strict';

describe('Directive: fieldDirective', function () {
  beforeEach(module('secPolGen'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<field-directive></field-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the fieldDirective directive');
  }));
});
