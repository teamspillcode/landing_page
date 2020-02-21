document.addEventListener("DOMContentLoaded", function() {
  const elems = document.querySelector(".sidenav");
  M.Sidenav.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function(){
  const box = document.querySelector(".modal");
  M.Modal.init(box, {});
})