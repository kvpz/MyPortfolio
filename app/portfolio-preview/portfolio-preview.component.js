'use strict';

angular
  .module('portfolioPreview')
  .component('portfolioPreview', {
    templateUrl: 'portfolio-preview/portfolio-preview.template.html',
    controller: ['projectDataFactory',
      function PortfolioPreviewController(projectDataFactory) {
        this.projects = projectDataFactory.query();
    }]
  });