$(document).ready(function () {
    // Check if video exists
    var video = document.getElementById("bg-video");
    video.onerror = function () {
        $(".fallback-slider").show();
        $("#bg-video").hide();
        $(".fallback-slider").slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: false,
            fade: true,
        });
    };

    // Mobile Menu Toggle
    $(".menu-toggle").click(function () {
        $("nav ul").toggleClass("active");
    });
});
