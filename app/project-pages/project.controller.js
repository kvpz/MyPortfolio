'use strict';

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope', '$routeParams', '$resource', '$window', 'projectDataFactory',
    function($scope, $routeParams, $resource, $window, projectDataFactory) {
      $scope.wasSubmitted = false;
      $scope.projectDetails = projectDataFactory({ isArray: false, method: 'GET' })
                                .query({ projectId: $routeParams.projectId });

      // Put programming languages from array into a comma separated string
      $scope.languages = function(){
        let _lang = new String();
        let _langs = $scope.projectDetails["programmingLanguages"];
        for(let lan of _langs){
          _lang += lan;
          if(lan != _langs[_langs.length-1])
            _lang += ", ";
        }
        return _lang;
      };

      var programURL = 'https://ideallyconnected.me/cgi-bin/cs50/pset4/resize.sh?multiplier=:multiplier&subbtn=Submit';
      var request = $resource(programURL, null, {
          newimage: {
            method: 'GET',
            headers: {
              'Content-type': 'text/html'
            }
          }
        }
      );

      // Called during form submission
      $scope.submit = function() {
        $scope.wasSubmitted = true;
        request.newimage({ multiplier: $scope.multiplier }).$promise.then(function(response){
          $scope.result = response;
          // extract HTML data from server response
          $scope.htmlString = new String();
          for(var k in response){
            if(k[0] == '$') break;
            $scope.htmlString += response[k];
          }
        });
      };

      $scope.reset = function(){
        $window.location.reload();
      };
  }]);