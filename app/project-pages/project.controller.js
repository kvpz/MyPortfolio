'use strict';

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope', '$routeParams', '$resource', '$window', 'loadedProjects',
    function($scope, $routeParams, $resource, $window, loadedProjects) {
      $scope.wasSubmitted = false;
      $scope.projectData = loadedProjects;
      $scope.subprograms = loadedProjects['subprograms'];
      $scope.subprogram = $scope.subprograms[0];
      $scope.subprogramDescription = loadedProjects[$scope.subprogram];

      // Put programming languages from array into a comma separated string
      $scope.languages = function(){
        var _langs = loadedProjects["programmingLanguages"];
        var _lang = _langs.join(", ");
        return _lang;
      };
  }]);