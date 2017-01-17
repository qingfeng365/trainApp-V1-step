(function() {
  'use strict';
  var currApp = angular.module('root');
  currApp
    .controller('root.rootController', ['$rootScope', '$state', '$ionicHistory',
      '$window',
      function($rootScope, $state, $ionicHistory,$window) {
        $rootScope.goBack = function() {
          $ionicHistory.goBack();
        };
        $rootScope.gotoUrl = function(targetURL) {
          $window.location.href = targetURL;
        };
      }
    ]);
})();
