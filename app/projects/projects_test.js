'use strict';

describe('myApp.projects module', function() {

  beforeEach(module('myApp.projects'));

  describe('projects controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var projectsCtrl = $controller('ProjectsCtrl');
      expect(projectsCtrl).toBeDefined();
    }));

  });
});