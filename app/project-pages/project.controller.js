'use strict';

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope', '$routeParams', '$resource', '$window', 'projectDataFactory',
    function($scope, $routeParams, $resource, $window, projectDataFactory) {
      $scope.wasSubmitted = false;
      $scope.projectDetails = projectDataFactory({ isArray: false, method: 'GET' }).query({ projectId: $routeParams.projectId });
      $scope.languages = function(){
        let lstring = new String();
        let lans = $scope.projectDetails["programmingLanguages"];
        for(let lan of lans){
          lstring += lan;
          if(lan != lans[lans.length-1])
            lstring += ", ";
        }
        return lstring;
      };

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