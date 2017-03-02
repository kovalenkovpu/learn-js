//полифилл textContent()
(function() {
  "use strict";
  Object.defineProperty(Element.prototype, "textContentPoli", {
    let selector = this;
    let result;
    
    get: function() {
      let content = querySelector(selector).innerHTML,
          run = true;
      
      for (let i = 0; i < content.length; i++) {
        if (content[i] == "<") {
          run = false;
          continue;
        };
                        
        if (content[i] == ">") {
          run = true;
          continue;
        };
        
        if (run == true) result += content[i];
      };
    },
    set: function(el) {
      this.innerText = el;
    }
  });

window.textContentPoli = textContentPoli;
})();