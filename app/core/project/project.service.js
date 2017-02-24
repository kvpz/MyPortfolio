'use strict';

angular
  .module('core.project')
  .factory('Project', ['$resource',
  function($resource) {
    return $resource('Data/projects/:projectId.json', {}, {
      query: {
        method: 'GET',
        params: { projectId: 'projects' },
        isArray: true
      }
    });
  }]);