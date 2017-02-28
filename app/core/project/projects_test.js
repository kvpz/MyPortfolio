'use strict';

describe('myApp.project module', function() {

  beforeEach(module('myApp.projects'));

  describe('project controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var projectsCtrl = $controller('ProjectsCtrl');
      expect(projectsCtrl).toBeDefined();
    }));

  });
});