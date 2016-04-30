(function() {
  'use strict';

  var toggle = document.getElementsByClassName('nav-toggle')[0];
  var overlay = document.getElementsByClassName('nav-overlay')[0];

  toggle.addEventListener('click', function(){
    this.classList.toggle('active');
    overlay.classList.toggle('active');
  });
})();
