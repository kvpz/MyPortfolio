'use strict';

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope', '$routeParams', '$resource', '$route', '$window',
    function($scope, $routeParams, $resource, $route, $window) {
      $scope.projectTitle = $routeParams.projectId;
      $scope.wasSubmitted = false;

      var testURL = 'https://ideallyconnected.me/cgi-bin/cs50/pset4/resize.sh?multiplier=:multiplier&subbtn=Submit';
      var request = $resource(testURL, null, {
          newimage: {
            method: 'GET',
            headers: {
              'Content-type': 'text/html'
            }
          }
        }
      );

      $scope.retrieved = false;
      // Called after form submission
      $scope.submit = function() {
        $scope.wasSubmitted = true;
        request.newimage({ multiplier: $scope.multiplier }).$promise.then(function(response){
          $scope.result = response;
          // gather HTML data from server response
          $scope.htmlString = new String();
          for(var k in response){
            if(k[0] == '$') break;
            $scope.htmlString += response[k];
          }
          $scope.retrieved = true;
        });
      };

      $scope.reset = function(){
        $window.location.reload();
      };
  }]);