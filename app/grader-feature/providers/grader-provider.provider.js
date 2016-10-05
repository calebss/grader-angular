angular.module('myApp.graderFeature')
  .provider('graderProvider', function() {

  function GraderProvider(config) {

    this.testConfig = function() {
      console.log(config);
    }
  }

  this.$get = function(config) {
    return new GraderProvider(config);
  };
});