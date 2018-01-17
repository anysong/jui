angular.module('jui').controller('IframeCtrl', ['$scope', function($scope){
	var initParams = function(){
		$scope.iframeList = [1,2,3,4];

	};
	var init = function(){
		initParams();
	};
	init();
}])