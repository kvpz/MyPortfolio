angular
  .module('myApp.home')
  .controller('HomeController', ['$scope',
    function($scope) {
      $scope.greeting = "Hello from Home controller";

}]);