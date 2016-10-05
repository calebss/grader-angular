angular.module('myApp.graderFeature')
  .controller('GraderPageController', GraderPageController);

function GraderPageController(graderFactory) {
  var vm = this;
  vm.test = 'Test binding';
  console.log('Grader page controller activated');
  graderFactory.callSomeApi();
  vm.isLoadingUsers = true;
  graderFactory.callRealApi().then(
    function (successResponse) {
      console.log('success:');
      console.log(successResponse);
      vm.users = successResponse.data;
    },
    function (errorResponse) {
      console.log('error:');
      console.log(errorResponse);
    }
  )
    .finally(function () {
      vm.isLoadingUsers = false;
    })

}

GraderPageController.$inject = ['graderFactory'];