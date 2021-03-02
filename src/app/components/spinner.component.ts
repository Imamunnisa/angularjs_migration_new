/*import * as angular from 'angular';


angular
  .module("codecraft")
  .directive("ccSpinner", function() {
    return {
      restrict: "AE",
      templateUrl: "templates/spinner.html",
      scope: {
        isLoading: "=",
        message: "@"
      }
    };
  });*/
import * as angular from 'angular';
let SpinnerComponent = {
    selector: "ccSpinner",
    template: `
    <div class="spinner" 
    ng-show="$ctrl.isLoading">
    <span us-spinner="{radius:8, width:5, length: 3, lines:9}"></span>

    <p>{{ message }}</p>
   </div>
    `,
    bindings: {
      isLoading: "=",
        message: "@"
    },
    
  };
  
  angular
    .module("codecraft")
    .component(SpinnerComponent.selector, SpinnerComponent);
  