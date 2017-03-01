var templateFunction = function(arr){
  return "project-pages/" + arr.projectId + "-project/" + arr.projectId + "-project.html";
};

angular
  .module('myApp')
  .config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/home', {
          templateUrl: 'home/home.html',
          controller: 'HomeController'
        })
        .when('/project-pages/:projectId', {
          templateUrl: templateFunction,
          controller: 'ProjectPageController'
        })
        .otherwise({redirectTo: '/home'});
      $routeProvider.eagerInstantiationEnabled(true);
  }]);

