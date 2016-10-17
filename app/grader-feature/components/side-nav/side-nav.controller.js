angular.module('myApp.graderFeature')
  .controller('SideNavController', SideNavController);

function SideNavController(graderFactory, $scope, $mdSidenav) {
   
 	$scope.openLeftMenu = function() {
   		$mdSidenav('left').toggle();
 	};
   	$scope.openRightMenu = function() {
       $mdSidenav('right').toggle();
   	};
}

GraderComponentController.$inject = ['graderFactory'];