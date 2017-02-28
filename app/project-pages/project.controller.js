'use strict';

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope', '$routeParams', '$resource',
    function($scope, $routeParams, $resource) {
      $scope.projectTitle = $routeParams.projectId;
      $scope.wasSubmitted = false;
      //$scope.multiplier = 1;
      var testURL = 'https://ideallyconnected.me/cgi-bin/cs50/pset4/resize.sh?multiplier=:multiplier&subbtn=Submit';
      var request = $resource(testURL,{
          multiplier: 10
        }, {
          newimage: {
            method: 'GET',
            headers: {
              'Content-type': 'text/html'
            }
          }
        }
      );

      $scope.submit = function(userInput) {
        $scope.wasSubmitted = true;
        request.newimage({ multiplier: $scope.multiplier }).$promise.then(function(response){
          $scope.result = response;
          // gather HTML data from server response
          $scope.strhtml = new String();
          for(var k in response){
            if(k[0] == '$') break;
            $scope.strhtml += response[k];
          }
        });
      };

      $scope.testHtml = "<div><h3>Hello from synthetic html</h3></div>";
  }]);