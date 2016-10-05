angular.module('myApp.graderFeature')
  .directive('graderDirective', GraderDirective);

function GraderDirective(){
  return {
    restrict: 'E',
    scope: {
      input: "="
    },
    template: '<h3>Grader Directive</h3><p>{{input}}</p>',
    link: function (scope, element, attrs) {

    }
  }
}