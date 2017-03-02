'use strict';

var subprogramTemplate = function(){
  console.log("In subprogramTEmplate 1");
  console.log(this);
  console.log("In subprogramTemplate");
  return "project-pages/imagemanipulation-project/" + this.require + ".html";
};

angular
  .module('projectPage')
  .component('resizeSubprogram', {
    templateUrl: subprogramTemplate,
    controller: ['$resource', '$window',
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

        // Called during form submission
        this.submit = function (multiplier) {
          self.requestResult = request.newimage({multiplier: multiplier});
        };

      }]
  });
