(function() {
  'use strict';
  var currApp = angular.module('app');
  currApp
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('app', {
        url: '/app',
        views: {
          '': {
            templateUrl: 'app/app.template.main.html',
            controller: 'app.mainController',
            controllerAs: 'vm',
          }
        }
      });
    }]);
})();