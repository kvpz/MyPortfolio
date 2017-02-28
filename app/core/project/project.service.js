'use strict';

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