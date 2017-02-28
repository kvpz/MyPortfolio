angular
  .module('myApp')
  .config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/home', {
          templateUrl: 'home/home.html',
          controller: 'HomeController'
          //css: ['css/freelancer.css', 'css/font-awesome/css/font-awesome.css']
        })
        .when('/project-pages/:projectId', {
          templateUrl: 'project-pages/projects.html',
          controller: 'ProjectPageController'
        })
        .otherwise({redirectTo: '/home'});
    }]);