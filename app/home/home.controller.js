angular
  .module('myApp.home')
  .controller('HomeController', ['$scope', '$route', '$window',
    function($scope, $route, $window) {

      $scope.refreshPage = function(){
        $window.location.reload();
      };
}]);