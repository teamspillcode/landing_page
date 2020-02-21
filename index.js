document.addEventListener("DOMContentLoaded", function() {
  const elems = document.querySelector(".sidenav");
  M.Sidenav.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function(){
  const box = document.querySelector(".modal");
  M.Modal.init(box, {});
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 500);
        return false;
      }
    }
  });
});