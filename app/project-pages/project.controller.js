'use strict';

angular
  .module('projectPage')
  .controller('ProjectPageController', ['$scope',
    function($scope) {
      $scope.greeting = "Hello, this is my main project page.";
  }]);