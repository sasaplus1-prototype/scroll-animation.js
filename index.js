'use strict';

var TWEEN = require('tween.js');

var db, dd;

function createTween(params) {
  var from, to, duration, tween;

  from = params.from;
  to = params.to;

  duration = params.duration;

  tween = new TWEEN.Tween({
    scrollTop: from
  }).to({
    scrollTop: to
  }, duration);

  tween.onUpdate(function() {
    db || (db = document.body);
    dd || (dd = document.documentElement);

    db.scrollTop = this.scrollTop;
    dd.scrollTop = this.scrollTop;
  });

  return tween;
}

function scroll(params, callback) {
  var timer, animate, tween, isComplete;

  timer = params.timer;

  if (typeof timer !== 'function') {
    timer = function(fn) {
      return setTimeout(fn, 16);
    };
  }

  animate = function(time) {
    if (isComplete) {
      return;
    }

    timer(animate);

    TWEEN.update(time);
  };

  tween = createTween(params);
  tween
    .onComplete(function() {
      isComplete = true;

      if (typeof callback === 'function') {
        callback();
      }
    })
    .start();

  isComplete = false;

  timer(animate);

  return tween;
}

module.exports = {
  createTween: createTween,
  scroll: scroll
};
