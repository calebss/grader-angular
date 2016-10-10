function GraderComponentController(graderFactory, graderConstant) {
  console.log('Grader controller activated');
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

  this.addSchedule = function(item) {
    that.schedules.push({
	  	'name': item,
	  	'activities': []
	  });
  };

  this.addActivity = function(schedule, item){
  	schedule.activities.push(item);
  }

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

  this.linkGradeAgent = function(agent){
		for(var a = 0; a < that.agents.length; a++){
			if(that.agents[a].id == agent){
				for(var b = 0; b < that.agents[a].availability; b++)
				{
					var newGradeAgent = {
			  		"id": that.gradeAgents.length,
			  		"agent": {
			  			"id": agent,
			  			"name": that.agents[a].name
			  		}
		  		}
			  	
			  	that.gradeAgents.push(newGradeAgent);
				}
			}
		}
  }

  this.activitiesList = function(){
    return reduce = _.reduce(_.map(this.schedules, 'activities'), function(flattened, other) {
      return flattened.concat(other);
    }, []);
  }
}

angular.module('myApp.graderFeature')
  .component('graderComponent', {
    templateUrl: 'grader-feature/components/grader-component/grader-component.html',
    controller: GraderComponentController
  });

GraderComponentController.$inject = ['graderFactory', 'graderConstant'];

