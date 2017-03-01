'use strict';

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope', '$routeParams', '$resource', '$window', 'loadedProjects',
    function($scope, $routeParams, $resource, $window, loadedProjects) {
      $scope.wasSubmitted = false;
      $scope.projectData = loadedProjects;
      $scope.subprograms = loadedProjects['subprograms'];

      // Put programming languages from array into a comma separated string
      $scope.languages = function(){
        var _langs = loadedProjects["programmingLanguages"];
        var _lang = _langs.join(", ");
        return _lang;
      };

      var cgiURL = 'https://ideallyconnected.me/cgi-bin/cs50/pset4/resize.sh?multiplier=:multiplier&subbtn=Submit';
      var request = $resource(cgiURL, null, {
          newimage: {
            method: 'GET',
            headers: {
              'Content-type': 'text/html'
            },
            transformResponse: function(data){
              $scope.httpResponseData = data;
            },
            cache: false
          }
        }
      );

      // Called during form submission
      $scope.submit = function() {
        $scope.wasSubmitted = true;
        $scope.requestResult = request.newimage({ multiplier: $scope.multiplier });
      };

      $scope.reset = function(){
        $window.location.reload();
      }

  }]);