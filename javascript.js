document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementsByClassName('menu-container');
  var search = document.getElementsByClassName('search-container');

  function toggleMenu(x) {
    x.classList.toggle("is-active");
    menu[0].classList.toggle("dn");
  }

  function toggleSearch(){
    search[0].classList.toggle("dn");
  }
})

$(window).load(function() {

  $('.flexslider').flexslider({
    animation: 'slide'
  })

})
