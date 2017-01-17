(function() {
  'use strict';
  var currApp = angular.module('intro');
  currApp
    .controller('intro.mainController', ['$scope', '$state', '$ionicHistory',
      '$window',
      function($scope, $state, $ionicHistory, $window) {
        var vm = this;

        //ion-slides 是利用swiper插件,因此部分设置还需要看swiper api
        //http://idangero.us/swiper/api/#.WGnhtJKdrCg
        vm.options = {
          loop: false,
          effect: 'fade',
          speed: 500,
        };

        vm.gotoHome = function() {
          $state.go('app.tab.life', {});
          $window.localStorage['intromain_isshowed'] = 'true';
        };
        
        if ($window.localStorage['intromain_isshowed'] === 'true') {
          // 表示引导页已被执行过,直接跳转
          vm.gotoHome();
        } else {
          //如果没有被执行过,则等用户手动跳转          
        }

      }
    ]);
})();
