'use strict';


angular
  .module('projectPage')
  .component('resizeSubprogram', {
    templateUrl: subprogramTemplate,
    controller: ['$resource',
      function subprogramController($resource) {
        var self = this;
        var cgiURL = 'https://ideallyconnected.me/cgi-bin/cs50/pset4/resize.sh?multiplier=:multiplier&subbtn=Submit';
        var request = $resource(cgiURL, null, {
            newimage: {
              method: 'GET',
              headers: {
                'Content-type': 'text/html'
              },
              transformResponse: function (data) {
                self.httpResponseData = data;
              },
              cache: false
            }
          }
        );

        this.submit = function (multiplier) {
          self.requestResult = request.newimage({multiplier: multiplier});
        };
      }]
  });
