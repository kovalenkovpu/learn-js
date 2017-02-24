function Clock(options) {
  this._template = options.template;
  this._timer;
};

Clock.prototype._render = function() {
  let date = new Date();
  let hours = date.getHours();
  
  if (hours < 10) hours = '0' + hours;
  let min = date.getMinutes();
  
  if (min < 10) min = '0' + min;
  let sec = date.getSeconds();
  
  if (sec < 10) sec = '0' + sec;
  let output = (this._template).replace('h', hours).replace('m', min).replace('s', sec);
  
  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  this._render();
  this._timer = setInterval(this._render.bind(this), 1000);
};