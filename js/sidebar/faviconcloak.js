$(document).ready(function () {
    $("button").click(function () {
        var favicon = $(this).data("favicon");
        $("link[rel='icon']").attr("href", favicon);
        localStorage.setItem("favicon", favicon);
    });

    var fav = localStorage.getItem("favicon");
    if (fav !== null) {
        $("link[rel='icon']").attr("href", fav);
    }
});
