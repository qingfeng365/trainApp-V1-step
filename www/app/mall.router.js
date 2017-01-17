(function() {
  'use strict';
  var currApp = angular.module('mall');
  currApp
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('app.tab.mall', {
        url: '/mall',
        views: {
          'tab-near': {
            templateUrl: 'app/mall.template.main.html',
            controller: 'mall.mainController',
            controllerAs: 'vm',
          }
        }
      }); 
    }]);
})();