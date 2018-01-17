$(document).ready(function () {

    /*
    $('#btn2').on('click',function(){
                var $slides = $('.s');
        var currSlide = $('.s.active').data('position');
        var slidesCount = $slides.length;
        
        if(currSlide >= 1){
            $slides.removeClass('active');
            $('.s[data-position='+(currSlide-1)+']').addClass('active');
        }
        
    });
    
    $('#btn3').on('click', function(){
        var $slides = $('.s');
        var currSlide = $('.s.active').data('position');
        var slidesCount = $slides.length;
        
        if (currSlide < slidesCount -1){
            $slides.removeClass('active');
            $('.s[data-position='+(1+currSlide)+']').addClass('active');
        }
    });
    */

    var allSlides = 0;

    var mrId = 0;

    $("#btn1").on('click', function () {
        var firstInput = document.getElementById("inputHead").value;
        var secondInput = document.getElementById("inputFoot").value;
        mrId++;
        $(".left-board").append("<div class='slide' id='" + mrId + "'><div class='header'><p class='head'>" + firstInput + "</p></div><div class='footer'><p class='foot'>" + secondInput + "</p></div></div>");

        var $slides = $(".left-board .slide");
        $slides.removeClass('active');
        $('.left-board .slide:last').addClass('active');



    });


    addEventListener("keydown", function (e) {
        var currentSlide = $(".active").attr("id");
        switch (e.keyCode) {
            case 38:

                if (currentSlide > 1) {
                    $(".left-board .slide").removeClass('active');
                    $('.left-board .slide[id=' + (currentSlide - 1) + ']').addClass('active');
                    $('.content').html("<div class='slide'>" + $('.left-board .slide.active').html() + "</div>");
                }

                break;
            case 40:

                if (currentSlide >= 1 && currentSlide < mrId) {
                    $(".left-board .slide").removeClass('active');
                    currentSlide++;
                    $('.left-board .slide[id=' + currentSlide + ']').addClass('active');
                    $('.content').html("<div class='slide'>" + $('.left-board .slide.active').html() + "</div>");
                }

                break;
        }
    })


    $(".left-board").on('click', '.slide', function () {
        var currentSlide = $(this).attr("id");
        $(".left-board .slide").removeClass('active');
        $('.left-board .slide[id=' + currentSlide + ']').addClass('active');
        $(".content").html("<div class='slide'>" + $(this).html() + "</div>");
    });



    $("#btn2").on('click', function () {

        document.querySelector(".content .slide").webkitRequestFullscreen();
        
        
    });
});
