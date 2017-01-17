(function() {
  'use strict';
  var currApp = angular.module('app');
  currApp
    .service('appDataService', ['$q', '$http',
      function($q, $http) {
      	/**
      	 * [getStoreList description]
      	 * @param  {[type]} start [起始记录,从0开始计数]
      	 * @param  {[type]} size  [返回数据条数]
      	 * @return {[type]}       [description]
      	 */
        this.getStoreList = function(start, size) {
          var self = this;
          return $q(function(resolve, reject) {
            //静态演示,制造1秒延时效果
            var count = self.demoDatas.stores.length;
            var end = start + size - 1;
            setTimeout(function() {
            	if (start < count){
            		if(end >= count){
            			end = count - 1;
            		}
            		resolve(self.demoDatas.stores.slice(start, end + 1));
            	} else {
            		// 如果start已到最大,
            		resolve([]);
            	}
            }, 1000);
          });
        };

        this.demoDatas = {};
        /* 生活频道首页商铺列表数据 */
        this.demoDatas.stores=  [{
            id: 10000000,
            type: '1',
            img: 'img/logo/haizhilv.jpg',
            name: '海之旅（顺义华联店）',
            loc: '顺义',
            mallId: '100000',
            star: [1, 1, 1, 1, 1],
            spend: 27,
            reservation: 156,
            distance: 1.8,
            display: true,
            recommend: false,
            products: [{ id: 1000000000, type: '1', img: 'img/logo/haizhilv.jpg', name: '单人午餐海鲜自助！提供免费WiFi！', loc: '顺义', storeId: 10000000, currentPrice: 59, originPrice: 79, saledCount: 6800, display: true },
              { id: 1000000001, type: '1', img: 'img/logo/haizhilv.jpg', name: '单人午餐海鲜自助！节假日通用！', storeId: 10000000, currentPrice: 69, originPrice: 89, saledCount: 3002, display: true }
            ]
          }, {
            id: 10000001,
            type: '1',
            img: 'img/logo/McDonalds.jpg',
            name: '麦当劳（顺义西单店）',
            loc: '顺义',
            mallId: '100001',
            star: [1, 1, 1, 1, 0],
            spend: 36,
            reservation: 226,
            distance: 2.1,
            display: true,
            recommend: false,
            products: [{ id: 1000000014, type: '1', img: 'img/logo/McDonalds.jpg', name: '100元代金券！', storeId: 10000001, currentPrice: 85, originPrice: 100, saledCount: 2156, display: true }]
          }, {
            id: 10000002,
            type: '1',
            img: 'img/logo/pizza.jpg',
            name: '必胜客（顺义新世界店）',
            loc: '顺义',
            mallId: '100002',
            star: [1, 1, 1, 1, 1],
            spend: 78,
            reservation: 33,
            distance: 2.2,
            display: true,
            recommend: false,
            products: [{ id: 1000000002, type: '1', img: 'img/logo/pizza.jpg', name: '【推荐】顺义店单人自助！节假日通用！', storeId: 10000002, currentPrice: 100, originPrice: 120, saledCount: 1156, display: true }]
          }, {
            id: 10000003,
            type: '1',
            img: 'img/logo/qiaojiangnan.jpg',
            name: '俏江南（顺义新世界店）',
            loc: '顺义',
            mallId: '100002',
            star: [1, 1, 1, 1, 0],
            spend: 108,
            reservation: 33,
            distance: 2.2,
            display: true,
            recommend: false,
            products: [{ id: 1000000003, type: '1', img: 'img/logo/qiaojiangnan.jpg', name: '200元代金券！', storeId: 10000003, currentPrice: 180, originPrice: 200, saledCount: 1562, display: true },
              { id: 1000000004, type: '1', img: 'img/logo/qiaojiangnan.jpg', name: '100元代金券！', storeId: 10000003, currentPrice: 95, originPrice: 100, saledCount: 1256, display: true }
            ]
          }, {
            id: 10000004,
            type: '1',
            img: 'img/logo/haidilao.jpg',
            name: '海底捞（顺义新世界店）',
            loc: '顺义',
            mallId: '100002',
            star: [1, 1, 1, 1, 1],
            spend: 88,
            reservation: 123,
            distance: 2.2,
            display: true,
            recommend: false,
            products: [{ id: 1000000005, type: '1', img: 'img/logo/haidilao.jpg', name: '200元代金券！', storeId: 10000004, currentPrice: 150, originPrice: 200, saledCount: 1556, display: true },
              { id: 1000000006, type: '1', img: 'img/logo/haidilao.jpg', name: '100元代金券！', storeId: 10000004, currentPrice: 79, originPrice: 100, saledCount: 2156, display: true }
            ]
          }, {
            id: 10000005,
            type: '1',
            img: 'img/logo/xiabu.jpg',
            name: '呷哺（顺义宜宾店）',
            loc: '顺义',
            mallId: '100003',
            star: [1, 1, 1, 1, 1],
            spend: 50,
            reservation: 133,
            distance: 3.8,
            display: true,
            recommend: false,
            products: [{ id: 1000000007, type: '1', img: 'img/logo/xiabu.jpg', name: '单人午餐海鲜自助！提供免费WiFi！', storeId: 10000005, currentPrice: 125, originPrice: 150, saledCount: 156, display: true }]
          }, {
            id: 10000006,
            type: '2',
            img: 'img/logo/laladao.jpg',
            name: '新辣道（顺义华联店）',
            loc: '顺义',
            mallId: '100000',
            star: [1, 1, 1, 1, 1],
            spend: 27,
            reservation: 156,
            distance: 1.8,
            display: true,
            recommend: false,
            products: [{ id: 1000000008, type: '1', img: 'img/logo/laladao.jpg', name: '200元代金券！', storeId: 10000006, currentPrice: 160, originPrice: 200, saledCount: 3416, display: true }]
          }, {
            id: 10000007,
            type: '2',
            img: 'img/logo/pianyifangad.jpg',
            name: '便宜坊（顺义华联店）',
            loc: '顺义',
            mallId: '100000',
            star: [1, 1, 1, 1, 0],
            spend: 36,
            reservation: 226,
            distance: 2.1,
            display: true,
            recommend: false,
            products: [{ id: 1000000009, type: '1', img: 'img/logo/pianyifangad.jpg', name: '200元代金券！', storeId: 10000007, currentPrice: 160, originPrice: 200, saledCount: 1568, display: true }]
          }, {
            id: 10000008,
            type: '2',
            img: 'img/logo/hannashan.jpg',
            name: '汉拿山（顺义华联店）',
            loc: '顺义',
            mallId: '100000',
            star: [1, 1, 1, 1, 1],
            spend: 78,
            reservation: 33,
            distance: 2.2,
            display: true,
            recommend: false,
            products: [{ id: 1000000010, type: '1', img: 'img/logo/hannashan.jpg', name: '200元代金券！', storeId: 10000008, currentPrice: 160, originPrice: 200, saledCount: 1526, display: true }]
          }, {
            id: 10000009,
            type: '2',
            img: 'img/logo/fucheng.jpg',
            name: '福成（顺义华联店）',
            loc: '顺义',
            mallId: '100000',
            star: [1, 1, 1, 1, 0],
            spend: 108,
            reservation: 33,
            distance: 2.2,
            display: true,
            recommend: false,
            products: [{ id: 1000000011, type: '1', img: 'img/logo/fucheng.jpg', name: '200元代金券！', storeId: 10000009, currentPrice: 160, originPrice: 200, saledCount: 1156, display: true }]
          }, {
            id: 10000010,
            type: '2',
            img: 'img/logo/zuoshangke.jpg',
            name: '座上客（顺义华联店）',
            loc: '顺义',
            mallId: '100000',
            star: [1, 1, 1, 1, 1],
            spend: 88,
            reservation: 123,
            distance: 2.2,
            display: true,
            recommend: true,
            products: [{ id: 1000000012, type: '1', img: 'img/logo/zuoshangke.jpg', name: '200元代金券！', storeId: 10000010, currentPrice: 160, originPrice: 200, saledCount: 1156, display: true },
              { id: 1000000013, type: '1', img: 'img/logo/zuoshangke.jpg', name: '100元代金券！', storeId: 10000010, currentPrice: 85, originPrice: 100, saledCount: 2158, display: true },
              { id: 1000000014, type: '1', img: 'img/logo/zuoshangke.jpg', name: '50元代金券！', storeId: 10000010, currentPrice: 45, originPrice: 50, saledCount: 3350, display: true }
            ]
          }, {
            id: 10000011,
            type: '2',
            img: 'img/logo/hanshikaorou.jpg',
            name: '韩式烤肉（顺义华联店）',
            loc: '顺义',
            mallId: '100000',
            star: [1, 1, 1, 1, 1],
            spend: 50,
            reservation: 133,
            distance: 3.8,
            display: true,
            recommend: false,
            products: [{ id: 1000000015, type: '1', img: 'img/logo/hanshikaorou.jpg', name: '200元代金券！', storeId: 10000011, currentPrice: 160, originPrice: 200, saledCount: 1456, display: true }]
          }, {
            id: 10000012,
            type: '2',
            img: 'img/logo/kfc.jpg',
            name: '肯德基（顺义宜宾店）',
            loc: '顺义',
            mallId: '100003',
            star: [1, 1, 1, 1, 1],
            spend: 50,
            reservation: 133,
            distance: 3.8,
            display: true,
            recommend: false,
            products: [{ id: 1000000016, type: '1', img: 'img/logo/kfc.jpg', name: '100元代金券！', storeId: 10000012, currentPrice: 85, originPrice: 100, saledCount: 2156, display: true }]
          }];
      }
    ]);
})();