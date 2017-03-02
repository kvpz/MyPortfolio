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
          controller: 'ProjectPageController',
          resolve: {
            loadedProjects: ['projectDataFactory', '$route', function(projectDataFactory, $route){
              return projectDataFactory({
                isArray: false,
                method: 'GET'
              }).query({ projectId: $route.current.params.projectId }).$promise;
            }]
          }
        })
        .otherwise({ redirectTo: '/home' });
  }]);

/*
  In the resolve action, $route must be used instead of $routeParams because $routeParams is only
  updated after the route has been changed.
*/