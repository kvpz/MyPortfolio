'use strict';

angular
  .module('portfolioPreview')
  .component('portfolioPreview', {
    templateUrl: 'portfolio-preview/portfolio-preview.template.html',
    controller: ['Project',
      function PortfolioPreviewController(Project) {
        this.projects = Project.query();
        //[{"modal": 1}, {"modal": 2}, {"modal": 3}, {"modal": 4}, {"modal": 5}, {"modal": 6}];
    }]
  });