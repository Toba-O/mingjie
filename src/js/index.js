AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    once: true
});

$(document).ready(function () {
    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 0.08 * $(window).height()}, 800, 'linear');
    });
});