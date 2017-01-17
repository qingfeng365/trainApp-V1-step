(function() {
  'use strict';
  var currApp = angular.module('cate');
  currApp
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('app.tab.cate', {
        url: '/cate',
        views: {
          'tab-life': {
            templateUrl: 'app/cate.template.main.html',
            controller: 'cate.mainController',
            controllerAs: 'vm',
          }
        }
      });  
    }]);
})();