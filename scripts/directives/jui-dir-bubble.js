angular.module('jui').directive('juiDirBubble', ['$timeout', function($timeout){

	var link = function(s,e){
        var $scope = s,
            $node = $(e[0]);

        var initParams = function(){
        };
        var bind = function(){
            if($scope.juiPosition){
                if($scope.juiPosition.indexOf('left') != -1){
                    $node.addClass('left_direction');
                };
                if($scope.juiPosition.indexOf('up') != -1){
                    $node.addClass('up_direction');
                };
            };
            if($scope.juiStyle){
                var json = JSON.parse($scope.juiStyle);
                for(var name in json){
                    $node.css(name, json[name]);
                };
            };
            if($scope.juiLimit){
                //10
                if($scope.juiContent.length < parseInt($scope.juiLimit)){
                    $node.css('display', 'none');
                    $node.css('color', 'red');
                };
            };
        };
        var init = function(){
            initParams();
            bind();
        };
        init();
    };
    return {
        restrict: 'A',
        templateUrl: 'views/directives/jui-dir-bubble.html',
        replace: true,
        scope: {
            juiContent: '=',
            juiPosition: '@',
            juiStyle: '=',
            juiLimit: '@',
        },
        link: link
    };
}])