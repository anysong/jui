angular.module('jui').controller('MainCtrl', ['$scope', 
function($scope){	
	alert('main');
	var initParams = function(){
		$scope.menuList = [{
			'name': 'Table',
			'href': 'jui.table',
			'id': 1

		},{
			'name': 'Bubble',
			'href': 'jui.bubble',
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