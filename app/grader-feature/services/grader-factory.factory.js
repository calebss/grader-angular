angular.module('myApp.graderFeature')
// factory precisa de uma função que retorne o serviço a ser instanciado
  .factory('graderFactory', GraderFactory);

function GraderFactory($http, graderConstant) {
  //definir variáveis e funções do serviço
  var text = 'call some api';

  function callSomeApi() {
    console.log(text);
  }

  function callRealApi() {
    return $http.get('https://jsonplaceholder.typicode.com/users');
  }

  function getAgent(){
    return $http.get(graderConstant + '/agent/1');
  }

  function createAgent(agent){
    return $http.post(graderConstant + '/agent/', agent);
  }

  // objeto retornado é a api pública desse serviço.
  return {
    callSomeApi: callSomeApi,
    callRealApi: callRealApi,
    getAgent: getAgent,
    createAgent: createAgent
  };
}

GraderFactory.$inject = ['$http', 'graderConstant'];