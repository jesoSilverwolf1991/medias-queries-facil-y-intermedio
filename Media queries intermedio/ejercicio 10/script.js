document.addEventListener('DOMContentLoaded', function() {
    const rotatingElement = document.getElementById('rotatingElement');
  
  
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  
    
    if (isTouchDevice) {
      rotatingElement.addEventListener('click', function() {
     
        rotatingElement.style.transform = 'rotate(45deg)';
      });
    }
  });
  

  
  