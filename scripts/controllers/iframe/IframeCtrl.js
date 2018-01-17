angular.module('jui').controller('IframeCtrl', ['$scope','$sce', function($scope, $sce){
	var initParams = function(){
		$scope.iframeList = [{
			'name': '01',
			'src': $sce.trustAsResourceUrl('https://www.sobot.com')
		},{
			'name': '02',
			'src':  $sce.trustAsResourceUrl('http://www.autohome.com')
		},{
			'name': '03',
			'src': $sce.trustAsResourceUrl('http://www.baidu.com')
		}];
		$scope.activeIrame = $scope.iframeList[0];
		console.log($scope.activeIrame);
	};
	var toggle = function(item){
		$scope.activeIrame = item;
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