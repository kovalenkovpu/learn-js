(function() {
  "use strict";
  
  class Carousel {
    constructor(el) {
      this.lis = el.getElementsByTagName('li'),
      this.left = el.querySelector(".arrow--left"),
      this.right = el.querySelector(".arrow--right");
      
      this._run();
      this._initEvents();
    }
    
    _run() {
      for (let i = 3; i < this.lis.length; i++) {
        this.lis[i].style.display = "none";
      };
    }
    
    _showPrevious() {
      for (let i = 0; i < this.lis.length; i++) {
        
        if (getComputedStyle(this.lis[i]).display !== "none" && i !== 0) {
          this.lis[i - 1].style.display = "inline-block";
          this.lis[i + 2].style.display = "none";
          break;
        }
      };
    }
    
    _showNext() {
      for (let i = (this.lis.length - 1); i >= 0 ; i--) {
        if (getComputedStyle(this.lis[i]).display !== "none" && i !== (this.lis.length - 1)) {
          this.lis[i + 1].style.display = "inline-block";
          this.lis[i - 2].style.display = "none";
          break;
        }
      };
    }
    
    _initEvents() {
      this.left.addEventListener("click", this._showPrevious.bind(this));
      
      this.right.addEventListener("click", this._showNext.bind(this));
    }
  };
  
  window.Carousel = Carousel;
})();