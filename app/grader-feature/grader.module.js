angular.module('myApp.graderFeature', [])
  .config(GraderFeatureConfig);

// Injeção de dependência explicita usando $inject na função
GraderFeatureConfig.$inject = ['$stateProvider'];

function GraderFeatureConfig($stateProvider) {
  // graderProvider;
  $stateProvider
    // estado pai
    .state({
      name: 'grader-feature',
      url: '/grader-feature',
      abstract: true,
      template: '<ui-view>'
    })
    // página usando componente
    .state({
      name: 'grader-feature.component',
      url: '/component',
      component: 'graderComponent'
    })
    // página usando controller + template
    .state({
      name: 'grader-feature.controller',
      url: '/controller',
      controller: 'GraderPageController as vm',
      templateUrl: 'grader-feature/components/grader-page/grader-page.html'
    })
}