// (function(){
// 	var app = angular.module('store', []);

// 	app.controller('StoreController', function(){

// 	});
// })();


// var MyApp = angular.module('MyApp', ['ng', 'ngResource']);

// MyApp.factory('flickrPhotos', function ($resource) {
//     return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
// });

// MyApp.directive('masonry', function ($parse) {
//     return {
//         restrict: 'AC',
//         link: function (scope, elem, attrs) {
//             elem.masonry({ itemSelector: '.masonry-item', columnWidth: $parse(attrs.masonry)(scope) });
//         }
//     };        
// });

// MyApp.directive('masonryItem', function () {
//     return {
//         restrict: 'AC',
//         link: function (scope, elem, attrs) {
//             elem.imagesLoaded(function () {
//                elem.parents('.masonry').masonry('reload');
//             });
//         }
//     };        
// });

// MyApp.controller('MasonryCtrl', function ($scope, flickrPhotos) {
//     $scope.photos = flickrPhotos.load({ tags: 'dogs' });
// });

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ［'$scope', '$http'］，function ($scope, $http) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3}
  ];

  $scope.orderProp = 'age';
}); 