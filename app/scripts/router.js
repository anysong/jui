angular.module('jui').config(function($locationProvider, $stateProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	
	$urlRouterProvider
	.when('/',function(){
		alert('aaa')
	})
	.otherwise(function(){
		alert('rru')
	})
	
	$stateProvider
	.state('home', {
		'url': 'app/home',
		'views': {
			'main': {
				'templateUrl': 'views/main.html',
				'controller': 'MainCtrl'
			}
		}
	})
	// .state('jui', {
	// 	'url': '/',
	// 	'views': {
	// 		'main': {
	// 			'templateUrl': 'views/main.html',
	// 			'controller': 'MainCtrl'
	// 		}
	// 	}
	// })
	.state('jui.a', {
		'url': '/a',
		'views': {
			'body': {
				'templateUrl': 'views/a.html',
				'controller': function(){
					alert('/a')
				}
			}
		}
	})
	.state('jui.table', {
		'url': '/Table',
		'views': {
			'body': {
				'templateUrl': 'views/a.html',
				'controller': 'TableCtrl'
			}
		}
	})
	.state('jui.bubble', {
		'url': '/Bubble',
		'views': {
			'body': {
				'templateUrl': 'views/b.html',
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