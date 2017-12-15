angular.module('jui').controller('TableCtrl', ['$scope', function($scope){
	$scope.workList = [1,2,3,4,5,6,7,8,9];

	var bind = function(){
		//body-height
        var tar = null;
        $('.zc-j-fixed-right').on('mouseenter', function() {
            tar = 'right';
        });
        $('.zc-j-fixed-right').on('mouseleave', function() {
            tar = 'main';
        });
        $('.zc-j-fixed-main-body').on('scroll', function(ev) {
            if (!tar) tar = 'main';
            if (tar == 'right') return;
            $('.zc-j-fixed-right-body-inner').scrollTop(ev.target.scrollTop);
            $('.zc-j-fixed-main-header').scrollLeft(ev.target.scrollLeft);
            if ((ev.target.scrollLeft + ev.target.clientWidth + 1) >= ev.target.scrollWidth) {
                $('.zc-j-fixed-right').removeClass('zc-j-fixed-right-shadow');
            } else {
                $('.zc-j-fixed-right').addClass('zc-j-fixed-right-shadow');
            };
        });
        $('.zc-j-fixed-right-body-inner').on('scroll', function(ev) {
            if (!tar) tar = 'right';
            if (tar == 'main') return;
            $('.zc-j-fixed-main-body').scrollTop(ev.target.scrollTop);
        });
        //横向
        $('.zc-j-fixed-main-header').scroll(function(ev) {
            $('.zc-j-fixed-main-body').scrollLeft(ev.target.scrollLeft);
        });

        //height
        $('.zc-j-fixed-inner').css('max-height', document.body.clientHeight - 300 + 'px');
        window.onresize = function() {
            $('.zc-j-fixed-inner').css('max-height', document.body.clientHeight - 300 + 'px')
        };

        var userAgent = window.navigator.userAgent;
        if (userAgent.indexOf('Firefox') != -1) {
            $('.zc-j-fixed-main-header').css('margin-bottom', '-16px');
            $('.zc-j-fixed-right-header').css('margin-bottom', '-16px');
            $('.zc-j-fixed-right-body').css('margin-bottom', '-16px');
        };
    };
    bind();
}])
