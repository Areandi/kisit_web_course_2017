$(document).ready(function(){
   
    var elements = document.querySelectorAll('ul > li:last-child');
    
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
    
    $("#btn1").on('click', function(){
        var firstInput = document.getElementById("inputHead").value;
        var secondInput = document.getElementById("inputFoot").value;
        $(".left-board").append("<div class='slide'><div class='header'><p class='head'>"+firstInput+"</p></div><div class='footer'><p class='foot'>"+secondInput+"</p></div></div>");
    });
    
    $(".left-board").on('click','.slide',function(){
        $(".content").html("<div class='slide'>"+$(this).html()+"</div>");
    });

});