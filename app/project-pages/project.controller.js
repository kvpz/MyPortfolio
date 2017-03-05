'use strict';
// Used in the components program's components that require a templateUrl
var subprogramTemplate = function(){
  return "project-pages/imagemanipulation-project/" + this.require + ".html";
};

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope', '$routeParams', '$resource', 'loadedProjects',
    function($scope, $routeParams, $resource, loadedProjects) {
      $scope.wasSubmitted = false;
      $scope.projectData = loadedProjects;
      $scope.subprograms = loadedProjects['subprograms'];
      $scope.subprogram = $scope.subprograms[0];
      $scope.subprogramDescription = loadedProjects['subprogramDescription'][$scope.subprogram];

      // Produce a string of the programming languages used for the selected project
      $scope.languages = function(){
        var _langs = loadedProjects["programmingLanguages"];
        var _lang = _langs.join(", ");
        return _lang;
      };
  }]);