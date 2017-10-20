app.directive("tab", function () {
    return {
        restrict: "EA",
        templateUrl: "./App/Views/all.html",
        link: function (scope, ele, attr,ctrl) {
            var mySwiper = new Swiper('.swiper-container', {
                loop:true,
                autoplay:1000,
                pagination:'.swiper-pagination',
                nextButton:".swiper-button-next",
                prevButton:'.swiper-button-prev',
                paginationClickable:true,
                autoplayDisableOnInteraction:false,
                observer:true,
                observeParents:false,
                onSlideChangeEnd: function(swiper){
                    swiper.update();
                    // mySwiper.startAutoplay();
                    // mySwiper.reLoop();
                }
            });
            if ($('#scroller>dl').length > 2) {
                $('#scroller').width($('#scroller>dl').width() * $('#scroller>dl').length + 200);
                var mySwiper = new IScroll('#roll',{
                    mouseWheel: true,
                    scrollX:true,
                    click:true
                })
            }

            $("nav>p").on("click", function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
});