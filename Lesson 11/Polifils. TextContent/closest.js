//полифилл textContent()
(function() {
  "use strict";
  let textContentPoli = function(el) {
    let result = "No closest elements";
    let next = this;
    
    if (el.charAt(0) == ".") el = el.slice(1);
    
    while (next != null) {
      if (next === el ||
          next.tagName.toLowerCase() === el ||
          next.className === el) {
        
        result = next;
        break;
      }
      
      next = next.parentElement;
    };
    
    return result;
  };

window.closestPoli = closestPoli;
})();