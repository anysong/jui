angular.module('jui').config(function($httpProvider, $routeProvider, $locationProvider){
	// console.log($httpProvider);
	console.log($routeProvider);
	$locationProvider.html5Mode(true);
	$routeProvider
	
	.when('/Table', {
		'templateUrl': 'views/a.html',
        'controller': 'TableCtrl'
	})
	.when('/Bubble', {
		'templateUrl': 'views/b.html',
        'controller': 'BubbleCtrl'
	})
	//去除＃
	
	//去除叹号
	//$locationProvider.hashPrefix("");
	
})