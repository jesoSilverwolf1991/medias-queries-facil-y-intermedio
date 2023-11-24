document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.fixed-header');
  
    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
  
    
      if (window.innerWidth <= window.innerHeight && scrollPosition >= 200) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });
  });
  