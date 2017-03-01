'use strict';

/*
  This service is used to extract data from json files and store it into memory. projectDataFactory can
  be used as a function itself because, as you can see, the factory is returning a function that takes an argument.
 */
angular
  .module('core.project')
  .factory('projectDataFactory', ['$resource',
  function($resource) {
    return function(config) {
      return $resource('Data/projects/:projectId.json', {}, {
        query: angular.extend({
          method: 'GET',
          params: {projectId: 'projects'},
          isArray: true
        }, config)
      });
    };
  }
]);