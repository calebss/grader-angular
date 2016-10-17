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
    .state({
      name: 'grader-feature.agent',
      url: '/agent',
      component: 'agentComponent'
    })
    // página usando componente
    .state({
      name: 'grader-feature.component',
      url: '/component',
      component: 'graderComponent'
    })
}