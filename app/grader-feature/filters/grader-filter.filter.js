angular.module('myApp.graderFeature')
  .filter('graderFilter', GraderFilter);

function GraderFilter(){
  return function (input){
    input = input || '';
    return input.toUpperCase();
  }
}