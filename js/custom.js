/*global, function, $*/
$(document).ready(function(){
    
    'use strict';
    
    $('.icon-search').click(function(e){
        e.stopPropagation();
        $('.main-menu .icon-search .form-input').toggleClass('close') 
    });

    $('.main-menu .icon-search .form-input').click(function(e){
        e.stopPropagation();
    });

    $('body').click(function(){
        $('.main-menu .icon-search .form-input').addClass('close')
    });
    
    // fixed header
    $(window).on('scroll',function(){
        if( $(this).scrollTop() >= $('.main-menu').offset().top ){
            $('.fixed-header').addClass('show')
        } else {
            $('.fixed-header').removeClass('show')
        }
    })
    
    // Blog Wow Animate
    $(window).on('scroll',function(){
        if( $(this).scrollTop() >= ( $('.blog-animate').offset().top -500 ) ){
            $('.fade-in-left').each(function(){
                $(this).addClass('animated').css({
                    transitionDelay: $(this).data('delay')
                })
            })
        }
    })
    $(window).on('scroll',function(){
        if( $(this).scrollTop() >= $('.blog-animate').offset().top ){
                $('.fade-png').addClass('animated')
        }
    })
    
    // Slider
    $('.slider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        dots: true,
        nav:true,
        singleItem:true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout:6000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        items:1
    });
    
    // Popup
    $('.video-btn').click(function() {
        $('.popup').addClass('open')
    })
    $('.close-box').click(function() {
        $('.popup').removeClass('open')
    })
    
    /** Feature Icone **/
    $(window).on('scroll',function(){
        if( $(this).scrollTop() > ($('.feature').offset().top - 100) ){
            var scr = $(this).scrollTop() - $('.feature').offset().top;
            $('.feature .icon-logo').css({
                transform:'translateY('+scr+'px)'
            })
        }
    });
      
    var maxNumbar = 71;
    var    numbar = 0;
    
    $(window).on('scroll',function(){
        if( $(this).scrollTop() > ( $('.feature').offset().top - 600 ) ){
            var intval = setInterval(function(){
                if(numbar >= maxNumbar){
                    clearInterval(intval)
                } else {
                    $('.numbar').html(numbar)
                    numbar++
                }
            },600)
        }
    }); 
    
    // Project
    $('.carusel').owlCarousel({
        loop:true,
        margin:0,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout:6000,
        items:3,
        responsive : {
            0:{
                items:1,
                dots: false
            },
            // breakpoint from 768 up
            360: {
                items:1,
                dots: false
            },
            900:{
                items:3
            }
        }
    });
    
    
    // project Wow Animate
    $(window).on('scroll',function(){
        if( $(this).scrollTop() >= $('.project-animate').offset().top ){
            $('.project-animate .project-slider').addClass('animated')
        }
    })
    
    // Accordion
    $('.head-accordian').click(function(){ 
        
        $(this).next().slideToggle(500);
        $(this).toggleClass('open');
        
        if($(this).hasClass('open')){
            $(this).find('i').attr('class','fa fa-minus').css('backgroundColor','#ec7d1b')
        } else {
            $(this).find('i').attr('class','fa fa-plus').css('backgroundColor','#fff')
        }
        
        $(this).parent().siblings().find('.content-accordian').slideUp(500).prev().removeClass('open').find('i').attr('class','fa fa-plus').css('backgroundColor','#fff')
        
    })
    
    // Client Carousel
    if ( $('.item-img-carousel').length ){
        var clientsImage = $('.item-img-carousel');
        var clientsText = $('.clients-text');
            clientsImage.owlCarousel({
                loop:true,
                dots: false,
                autoplay: true,
                autoplayTimeout:5000,
                items:3,
                center:true,
                nav:false,
                
            }).on('click','.owl-item',function(){
                clientsImage.trigger('to.owl.carousel',[$(this).index(),500]);
            }).on('changed.owl.carousel',function(e){
                clientsText.trigger('to.owl.carousel',e.item.index,500)
            })
        
            clientsText.owlCarousel({
                loop:true,
                dots: false,
                autoplay: true,
                autoplayTimeout:5000,
                items:1,
                nav:false,
                
            })
    }
    
    // blog2 Wow Animate
    $(window).on('scroll',function(){
        if( $(this).scrollTop() >= $('.blog-2-animate').offset().top ){
            $('.blog-2-animate .some-box').addClass('animated')
        }
    })
    
    // subscripe Wow Animate
    $(window).on('scroll',function(){
        if( $(this).scrollTop() >= ($('.subscripe-animate').offset().top - 200) ){
            $('.subscripe-animate').addClass('animated')
        }
    })
    
    // Partner
    $('.partner').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:6000,
        items:5,responsive : {
            0:{
                items:3,
                dots: false
            },
            // breakpoint from 768 up
            360: {
                items:3,
                dots: false
            },
            900:{
                items:5
            }
        }
    });
    
    // mobile menu
    $('.bar-btn').click(function(e){
        e.stopPropagation();
        $('.main-menu ul').addClass('show-menu');
    })
    
    $('.main-menu ul .fa-times').click(function(){
        $('.main-menu ul').removeClass('show-menu')
    })
    
    
    
    
});