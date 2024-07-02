$(document).ready(function(){
    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('nav a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
$(document).ready(function(){
    $("#header-placeholder").load("header.html", function() {
        // Centralizar o header após carregamento
        $(".header-container").css("margin", "0 auto");

        // Adicionar evento de clique ao botão Rádio Ao Vivo
        $(".live-radio-button").click(function() {
            $("#live-radio-bar").slideDown(); // Mostrar a barra do player
            $("#live-audio")[0].play(); // Reproduzir o áudio
        });

        // Adicionar evento de clique ao botão de fechar
        $("#close-player").click(function() {
            $("#live-radio-bar").slideUp(); // Esconder a barra do player
            $("#live-audio")[0].pause(); // Pausar o áudio
        });
    });
});

    // Adicionar evento de clique ao botão de subir ao topo
    $("#scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });