var mouseenter = function () {
  var animatic = document.getElementsByTagName('animatic')[0];
  for (i=0 ; i<5 ; i++) {
    setTimeout(function () {
      this.animatic.style.backgroundImage = 'url(assets/about/' + this.i + '.png)';
    }.bind({animatic: animatic, i: i}), i * 50 + 100);
  }
};

var mouseleave = function () {
  var animatic = document.getElementsByTagName('animatic')[0];
  for (i=0 ; i<5 ; i++) {
    setTimeout(function () {
      this.animatic.style.backgroundImage = 'url(assets/about/' + (4 - this.i) + '.png)';
    }.bind({animatic: animatic, i: i}), i * 50 + 100);
  }
};

var animatics = [];

var Animatic = function (frameDirectory, length) {
  var i;
  this.frames = [];
  for (i=0 ; i<length ; i++) {
    frames.push(frameDirectory + '/' + i);
  }
};

onload = function () {
  var animatics;
  var triggers;
  var i;
  animatics = document.getElementsByTagName('animatic');
  triggers = document.getElementsByClassName('trigger');
  for (i=0 ; i<animatics.length ; i++) {
    animatics[i].style.backgroundImage = 'url(' + 'assets/updates/0.png' + ')';
  }
  for (i=0 ; i<triggers.length ; i++) {
    triggers[i].onmouseenter = mouseenter;
    triggers[i].onmouseleave = mouseleave;
  }
};
