$(function(){
    
    $('.our-jobs-inner > li > i').filter(function(){
        $(this).css('animation-delay' , $(this).data('delay'));
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > $('.our-jobs-information').offset().top - $(window).innerHeight() / 2) {
            $('.our-jobs-inner > li > i').addClass('add-animation-circle');
            $('.line').addClass('add-animation-line');
        }
        if($(window).scrollTop() > 400){
            $(".elevator").css("display" , "flex");
        }else{
            $(".elevator").css("display" , "none");
        }
        if($(window).scrollTop() > $('.col-wrapper-33').offset().top - $(window).innerHeight() / 2){
            $('.col-wrapper-33 > figure').addClass('add-article-animation');
        }

    });

    $('.elevator').click(function(){
        $('body , html').animate({scrollTop : 0} , 500)
    });

    $(".form-selection").click(function(e){
        e.stopPropagation();
    });
    $(".form-selection > p").click(function(){
        $(this).html('موضوع');
        $(this).siblings('ul').show();
    });

    $(".form-selection > ul > li").click(function(){
        $(this).parent('ul').siblings('p').html($(this).html());
        $(this).parent('ul').hide();
    });

    $('body').click(function(){
        $(".form-selection > ul").hide()
    });

    $('form .form-email').keyup(function(){
        if($(this).val() !== ''){
            $(this).css('direction' , 'ltr');
        }else{
            $(this).css('direction' , 'rtl');
        }
    });

    // smooth scroll
    $('.nav-menu > ul > li > a').click(function(e){
        console.log(this.hash);
        $('body , html').animate({scrollTop : $(this.hash).offset().top - $('header').outerHeight()} , 1000);
    });

    $(".menu-toggler > a").click(function(e){
        e.preventDefault();
        $('.nav-menu > ul').addClass('ul-come');
        $('body').css('overflow' , 'hidden');
    });
    $(".close-menu").click(function(e){
        e.preventDefault();
        $('.nav-menu > ul').removeClass('ul-come');
        $('body').css('overflow' , 'visible');

    });

    $(window).resize(function(){
        $('.nav-menu > ul').removeClass('ul-come');
        $('body').css('overflow' , 'visible');
    });


    
});
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "ادامه مطلب"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "بستن مطلب"; 
      moreText.style.display = "inline";
    }
  }