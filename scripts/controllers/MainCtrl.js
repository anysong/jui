angular.module('jui').controller('MainCtrl', ['$scope','$state',
function($scope, $state){
	console.log($state.current.name);
	var initParams = function(){
		$scope.menuList = [{
			'title': 'Table',
			'href': 'main.table',
			'id': 1

		},{
			'title': 'Bubble',
			'href': 'main.bubble',
			'id': 2

		},{
			'title': 'Iframe',
			'href': 'main.iframe',
			'id': 3

		}];
		$scope.activeId = $state.current.name;
	};
	var toggle = function(item){
		$scope.activeId = item.href;
	};
	var initFunc = function(){
		$scope.toggle = toggle;
	};
	var init = function(){
		initParams();
		initFunc();
	};

	init();
}])
