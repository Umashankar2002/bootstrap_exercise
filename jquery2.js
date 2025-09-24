$(document).ready(function () {

    //adding 10px height to header
    $("#mypage-header").addClass("header-shrink");

    //shrinking and expanding the height of header when user hover on it
    $("#mypage-header").hover(function () {
        $(this).toggleClass("header-shrink header-expand");
    });

    /****************************************
     * adding slide down animation to footer*
    ****************************************/
    var alertModal = new bootstrap.Modal(document.getElementById('myModal'));

    $("#mypage-footer").on("mouseenter", () => {
        $("#mypage-footer-content").stop(true, true).slideDown(10000, () => {
            alertModal.show();
        });
    });

    $("#mypage-footer").on("mouseleave", function () {
        if (!$("#myModal").is(":visible")) {
            $("#mypage-footer-content").stop(true).slideUp(1000);
        }
    });

    $(".btn").on("click", () => {
        $("#myModal").fadeOut(200);
        $("#mypage-footer-content").stop(true).slideUp(1000);
    });
});