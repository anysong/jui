angular.module('jui').config(function($locationProvider, $stateProvider, $urlRouterProvider){

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/main/Table');

	$stateProvider
	.state('main', {
		'url': '/main',
		'views': {
			'main': {
				'templateUrl': 'views/main.html',
				'controller': 'MainCtrl'
			}
		}
	})
	.state('main.table', {
		'url': '/Table',
		'views': {
			'body': {
				'templateUrl': 'views/table.html',
				'controller': 'TableCtrl'
			}
		}
	})
	.state('main.bubble', {
		'url': '/Bubble',
		'views': {
			'body': {
				'templateUrl': 'views/bubble.html',
				'controller': 'BubbleCtrl'
			}
		}
	})

}).run(['$rootScope', '$window', '$location', '$log','$templateCache', function ($rootScope, $window, $location, $log,$templateCache) {

  var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

  function stateChangeSuccess($rootScope) {
   $templateCache.removeAll();
 }

}]);
