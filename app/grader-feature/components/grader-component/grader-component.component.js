function GraderComponentController(graderService, graderConstant) {
  console.log('Grader controller activated');
	var that = this;

  graderService.testService();
  console.log(graderConstant);
  this.test = 'Teste do filtro';
  this.editableText = 'test binding';

	this.agents = [];

	this.gradeAgents = [];

  this.schedules = [{'name': 'Quinta-Feira 1', 'activities': ['Maternal', 'Juniores', 'Pré-Adolescente', 'Adolescente']}, {'name': 'Quinta-Feira 2', 'activities': ['Maternal', 'Juniores', 'Pré-Adolescente', 'Adolescente']}];

  this.addSchedule = function(item) {
		console.log(item);
    that.schedules.push({

	  	'name': item,
	  	'activities': []
	  });
  };

  this.addActivity = function(schedule, item){
  	//console.log(schedule.activities, item)
  	schedule.activities.push(item);
  }

  this.addAgent = function(name, availability, image){
  	var newAgent = {
  		"id": that.agents.length,
  		"name": name,
  		"availability": availability,
  		"image": image
  	}

  	that.agents.push(newAgent);
  	console.log(that.agents);
  }

  this.linkGradeAgent = function(agent){
		//console.log(that.agents, agent);
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

  	console.log(that.gradeAgents)


  }
}

angular.module('myApp.graderFeature')
  .component('graderComponent', {
    templateUrl: 'grader-feature/components/grader-component/grader-component.html',
    controller: GraderComponentController
  });

GraderComponentController.$inject = ['graderService', 'graderConstant'];

