function AgentComponentController(graderFactory, graderConstant) {
  console.log('Agent controller activated');
  var that = this;
  this.agents = [];
  this.gradeAgents = [];
  this.schedules = [{'name': 'Quinta-Feira 1', 'activities': ['Maternal', 'Juniores', 'Pré-Adolescente', 'Adolescente']}, {'name': 'Quinta-Feira 2', 'activities': ['Maternal', 'Juniores', 'Pré-Adolescente', 'Adolescente']}];
  
  //Carregar agents
  graderFactory.getAgent().then(
    function (successResponse) {
      console.log('success:');
      console.log(successResponse);
      that.agents = successResponse.data.agentes;
      console.log(that.agents);
    },
    function (errorResponse) {
      console.log('error:');
      console.log(errorResponse);
    }
  );

  this.addAgent = function(name, availability, image){
    var newAgent = {
      "name": name,
      "availability": availability,
      "image": image
    }

    graderFactory.createAgent(newAgent).then(
      function (successResponse) {
        console.log('success:');
        console.log(successResponse);
        var id = successResponse.data.idAgent;
        newAgent.id = id
        that.agents.push(newAgent);
        console.log(newAgent);
      },
      function (errorResponse) {
        console.log('error:');
        console.log(errorResponse);
      }
    )
     .finally(function () {
      console.log(that.agents);
    })
  }
}

angular.module('myApp.graderFeature')
  .component('agentComponent', {
    templateUrl: 'grader-feature/components/agent-component/agent-component.html',
    controller: AgentComponentController
  });

AgentComponentController.$inject = ['graderFactory', 'graderConstant'];

