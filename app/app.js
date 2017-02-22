'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.projects',
  'myApp.version',
  'angularCSS'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
      //css: ['css/freelancer.css', 'css/font-awesome/css/font-awesome.css']
    })
    .otherwise({redirectTo: '/home'});
}]);
