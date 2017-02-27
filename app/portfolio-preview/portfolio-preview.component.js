'use strict';

angular
  .module('portfolioPreview')
  .component('portfolioPreview', {
    templateUrl: 'portfolio-preview/portfolio-preview.template.html',
    controller: ['Project',
      function PortfolioPreviewController(Project) {
        this.projects = Project.query();
    }]
  });