(function ($) {
    "use strict";

    $(".switcher__toggler").on("click", function () {
            $(".switcher").toggleClass("switcher__is-open")
        }),
        $(".tab-color").on("click", function () {
            $(".switcher-gradient").removeClass("active"),
                $(".switcher-color").addClass("active"),
                $(".tab-gradient").removeClass("active"),
                $(this).addClass("active")
        }),
        $(".tab-gradient").on("click", function () {
            $(".switcher-color").removeClass("active"),
                $(".switcher-gradient").addClass("active"),
                $(".tab-color").removeClass("active"),
                $(this).addClass("active")
        }),

        $(".switcher-tab__color button").on("click", function () {
            var t = $(".tab-color-clone").find(".active");
            0 < t.length && $("body").removeClass(t.attr("data-theme")),

                $("body").addClass($(this).attr("data-theme")),
                $(".switcher-tab__color button").removeClass("active"),
                $(this).addClass("active")
        }),
        $(".tab-full").on("click", function () {
            $(".switcher-boxed").removeClass("active"),
                $("body").removeClass("boxed-layout"),
                $(".tab-boxed").removeClass("active"),
                $(this).addClass("active")
        }),
        $(".tab-boxed").on("click", function () {
            $(".switcher-boxed").addClass("active"),
                $("body").addClass("boxed-layout"),
                $(".tab-full").removeClass("active"),
                $(this).addClass("active")
        }),

        $(".switcher-tab__pattern button").on("click", function () {
            var t = $(".switcher-boxed").find(".active");
            0 < t.length && $("body").removeClass(t.attr("data-theme")),
                $("body").addClass($(this).attr("data-theme")),
                $(".switcher-tab__pattern button").removeClass("active"),
                $(this).addClass("active")
        })

})(jQuery);