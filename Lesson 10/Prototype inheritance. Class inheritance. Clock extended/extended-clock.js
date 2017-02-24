function ExtendedClock(template) {
  Clock.apply(this, arguments);
  
  this._precision = template.precision;
};

ExtendedClock.prototype = Object.create(Clock.prototype);

ExtendedClock.prototype.start = function() {
  this._render();
  let self = this;
  this._timer = setInterval(this._render.bind(self), this._precision);
};