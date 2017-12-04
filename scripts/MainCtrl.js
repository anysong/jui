angular.module('jui').controller('MainCtrl', ['$scope', 
function($scope){	
	var initParams = function(){
		$scope.menuList = [{
			'name': 'Table',
			'href': '#/Table',
			'id': 1

		},{
			'name': 'Bubble',
			'href': '#/Bubble',
			'id': 2

		}];
		$scope.activeId = 1;
	};
	var toggle = function(item){
		$scope.activeId = item.id
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