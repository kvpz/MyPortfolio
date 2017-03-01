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
        var _langs = new Array($scope.projectDetails["programmingLanguages"]);
        _lang = _langs.join(", ");
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
      };
  }]);