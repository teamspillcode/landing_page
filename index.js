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

// SCROLL MAGIC FUNCTIONALITY

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '.solution-card-1',
  offset: -400
})  
.setClassToggle('.solution-card-1', 'move-up')
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.solution-card-2',
  offset: -350
})
.setClassToggle('.solution-card-2', 'move-up')
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.solution-card-3',
  offset: -500
})
.setClassToggle('.solution-card-3', 'move-up')
.addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: '.solution-card-4',
  offset: -400
})
.setClassToggle('.solution-card-4', 'move-up')
.addTo(controller);