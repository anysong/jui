angular.module('jui').controller('BubbleCtrl', ['$scope', function($scope){
	var initParams = function(){
        $scope.shortContent = "这里总共有九个文字";
        $scope.moreContent = "这里总共差不多有十三个文字";
        $scope.longContent = "这是很多字的提示文案，比较长这是很多字的提示文案，比较长这是很多字的提示文案，比较长这是很多字的提示文案，比较长这是很多字的提示文案，比较长这是很多字的提示文案，比较长这是很多字的提示文案，比较长";
        // $scope.size = '{"width":"150px","max-height":"100px"}';
        $scope.zStyle = '{"width":"150px"}';
        $scope.zPosition = '{"left":"0"}';
    }
    var initEvent = function(){

    };
    var init = function(){
        initEvent();
        initParams();
    };
    init();
}])
