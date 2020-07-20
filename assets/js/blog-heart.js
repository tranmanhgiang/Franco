$(".love").click(function () {
    $(this).toggleClass('text-danger');
});

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
    x.className += " responsive";
    } else {
    x.className = "nav";
    }
}