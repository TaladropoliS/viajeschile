// JAVASCRIPT (para los tooltip de Bootstrap)

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});


// jQuery

$(document).ready(function () {
    $('#quienesSomosUno, #quienesSomosDos, #quienesSomosTres')
        //cambia el fondo y color svg al pasar con el mouse en QUIENESSOMOS
        .mouseenter(function () {
            $(this).addClass('bg-light text-dark border-info rounded-3');
            $(this).find('.quienesFas').addClass('text-dark')
        })
        .mouseleave(function () {
            $(this).removeClass('bg-light text-dark border-info rounded-3');
            $(this).find('.quienesFas').removeClass('text-dark')
        });

    $('.card')
        // cambia el fondo y color texto al pasar con al mouse en las CARD
        .mouseenter(function () {
            $(this).addClass('bg-light text-dark border border-info rounded-3');
            $(this).find('.quienesFas').addClass('text-dark')
        })
        .mouseleave(function () {
            $(this).removeClass('bg-light text-dark border border-info rounded-3');
            $(this).find('.quienesFas').removeClass('text-dark')
        });

    // efecto smooth
    $("header ul a").on("click", function (e) {
        // 1
        e.preventDefault();
        // 2
        var href = $(this).attr("href");
        // 3
        $("html, body").animate({scrollTop: $(href).offset().top}, 800);
    });

    // navbar ACTIVE
    $(".nav-link").on("click", function(){
        $(".navbar-nav, .nav-link").find(".active").removeClass("active fw-bolder");
        $(this).addClass("active fw-bolder");
    });
});