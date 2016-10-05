angular.module('myApp.graderFeature')
.service('graderService', GraderService);

function GraderService() {
  this.testService = function(){
    console.log('test service');
  }
}