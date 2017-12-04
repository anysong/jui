angular.module('jui').config(function($httpProvider, $routeProvider, $locationProvider){
	// console.log($httpProvider);
	console.log($routeProvider);
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
	// $locationProvider.html5Mode(true);
	//去除叹号
	$locationProvider.hashPrefix("");
	
})