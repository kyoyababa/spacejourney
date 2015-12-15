var bg01 = $("#bg01"),
    bg02 = $("#bg02"),
    upper = $("#upper"),
    downer = $("#downer"),
    qt = $("#quickTravel"),
    headHeight = $("#header").height()*2,
    footHeight = $("#footer").height()*2;

bg01.css("padding-top",headHeight)
    .css("padding-bottom",footHeight);
$(".wrapper").css("padding-top",$(window).height()/5);
$("#quickTravel a,#nav li").prepend("- ");
qt.find("h2").click(function(){
    $(this).toggleClass("active").next("ul").slideToggle();
    $(this).parent("div").toggleClass("active");
});
qt.find("a").click(function(){
    qt.find("ul").slideUp();
});

var distance = $("#distance"),
    distanceSpan = distance.find("span"),
    theSun = $("#sun");
$(window).scroll(function(){
    var y = $(this).scrollTop();
    if ( y >= 500 ) {
        distanceSpan.text( Math.abs( Math.ceil( y * 1111 ) ));
    } else {
        distanceSpan.text( 0 );
    };
    bg01.css('background-position', parseInt( 0 ) + 'px ' + parseInt( y / 1.005 ) + 'px');
    bg02.css('background-position', parseInt( 0 ) + 'px ' + parseInt( y / 1.01 ) + 'px');
});

$(".description").hide();
$(".wrapper > img").click(function(){
    $(this).next().next(".description").fadeToggle();
})
$(".close").click(function(){
    $(this).parent().parent(".description").fadeOut();
});

var upperA = upper.find("a"),
    downerA = downer.find("a");
theSun.on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        upperA.attr("href", "#sun" );
        downerA.attr("href", "#mercury");
        upper.fadeOut();
    } else {
        upper.fadeIn();
    }
});
$('#mercury').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#venus').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#earth').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#moon').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#mars').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#phobos').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#deimos').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#jupiter').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#io').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#europa').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#ganymede').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#callisto').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#saturn').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#titan').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#uranus').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#neptune').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#triton').on('inview', function(){
    upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
    downerA.attr("href", "#" + $(this).nextAll(".planet").attr("id") );
});
$('#pluto').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
        downer.fadeOut();
    } else {
        downer.fadeIn();
    }
});
$('#endMessage').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        upperA.attr("href", "#" + $(this).prevAll(".planet").attr("id") );
        distance.fadeOut();
        downer.fadeOut();
    } else {
        distance.fadeIn();
    }
});

var lang = $('#lang');
var checkWidth = function() {
    if( $(window).width() <= 640 ){
        lang.find("dd").hide();
        lang.find("dt").click(function(){
            $(this).next("dd").slideToggle();
        });
    }
}; 
$(function(){
    checkWidth();
    $(window).resize(checkWidth);
});