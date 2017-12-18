angular.module('jui').controller('TableCtrl', ['$scope', function($scope){
	$scope.workList = [1,2,3,4,5,6,7,8,9];
    $scope.hoverIndex = null;
	var bind = function(){
		//body-height
        var tar = null;
        $('.jui-table-fixed-right').on('mouseenter', function() {
            tar = 'right';
        });
        $('.jui-table-fixed-right').on('mouseleave', function() {
            tar = 'main';
        });
        $('.jui-table-fixed-main-body').on('scroll', function(ev) {
            if (!tar) tar = 'main';
            if (tar == 'right') return;
            $('.jui-table-fixed-right-body-inner').scrollTop(ev.target.scrollTop);
            $('.jui-table-fixed-main-header').scrollLeft(ev.target.scrollLeft);
            if ((ev.target.scrollLeft + ev.target.clientWidth + 1) >= ev.target.scrollWidth) {
                $('.jui-table-fixed-right').removeClass('jui-table-fixed-right-shadow');
            } else {
                $('.jui-table-fixed-right').addClass('jui-table-fixed-right-shadow');
            };
        });
        $('.jui-table-fixed-right-body-inner').on('scroll', function(ev) {
            if (!tar) tar = 'right';
            if (tar == 'main') return;
            $('.jui-table-fixed-main-body').scrollTop(ev.target.scrollTop);
        });
        //横向
        $('.jui-table-fixed-main-header').scroll(function(ev) {
            $('.jui-table-fixed-main-body').scrollLeft(ev.target.scrollLeft);
        });

        //height
        $('.js-inner').css('max-height', document.body.clientHeight - 300 + 'px');
        window.onresize = function() {
            $('.js-inner').css('max-height', document.body.clientHeight - 300 + 'px')
        };

        var userAgent = window.navigator.userAgent;
        if (userAgent.indexOf('Firefox') != -1) {
            $('.jui-table-fixed-main-header').css('margin-bottom', '-16px');
            $('.jui-table-fixed-right-header').css('margin-bottom', '-16px');
            $('.jui-table-fixed-right-body').css('margin-bottom', '-16px');
        };
    };
    var addHoverStyle = function(item, index){
        // $scope.hoverId = item.id;
        $scope.hoverIndex = index + 1;
        console.log(index)
    };
    var removeHoverStyle = function(item, index){
        $scope.hoverIndex = null;
    };
    var initFunc = function(){
        $scope.addHoverStyle = addHoverStyle;
        $scope.removeHoverStyle = removeHoverStyle;
    };
    //ui-table-fixed-right
    var initShadow = function(){
        var scrollLeft = $('.jui-table-fixed-main-body').scrollLeft;
        var clientWidth = $('.jui-table-fixed-main-body').clientWidth;
       
        return;
        if ((ev.target.scrollLeft + ev.target.clientWidth + 1) >= ev.target.scrollWidth) {
            $('.jui-table-fixed-right').removeClass('jui-table-fixed-right-shadow');
        } else {
            $('.jui-table-fixed-right').addClass('jui-table-fixed-right-shadow');
        };
    };
    bind();
    initFunc();
    initShadow();
}])
