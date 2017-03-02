//полифилл remove()
(function() {
  "use strict";
  let removePoli = function() {
    
    if (this.parentElement) this.parentElement.removeChild(this);
    
    return;
  };

window.removePoli = removePoli;
})();