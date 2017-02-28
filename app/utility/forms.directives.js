var integer_regex = /^-?\d+$/;
angular
  .module('forms', [])
  .directive('integer', function(){
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl){

        ctrl.$validators.integer = function(modelValue, viewValue){

          if(ctrl.$isEmpty(modelValue)){
            // consider empty models to be valid (default value set in project $resource.
            return false;
          }

          if(integer_regex.test(viewValue)){
            return true; // is valid
          }

          // input is invalid
          return false;
        };
      }
    };
  });