(function(){

  'use strict';

  var setFont = document.getElementById('set-font');

  setFont.addEventListener('click', function(event) {
    document.getElementById('area').className = 'area';
  }, false);

  if (typeof document.fonts !== 'undefined') {
    console.log('document.fonts is implemented');

    document.fonts.addEventListener('loading', function(event) {
      console.log('loading event');
      console.log(event);
    }, false);
    document.fonts.addEventListener('loadingdone', function(event) {
      console.log('loadingdone event');
      console.log(event);
    }, false);
    document.fonts.addEventListener('loadingerror', function(event) {
      console.log('loadingerror event');
      console.log(event);
    }, false);

    var fontsReady = document.fonts.ready;

    if (typeof fontsReady === 'function') {
      fontsReady = document.fonts.ready();
    }

    fontsReady.then(function(fontFaceSet) {
      if (fontFaceSet.check('10px "Poiret One"')) {
        console.log('"Poiret One" font loaded');
      }
    });
  } else {
    console.log('document.fonts is not implemented');

    var font = new FontFaceObserver('Poiret One');

    font.load().then(function() {
      console.log('"Poiret One" font loaded');
    })['catch'](function() {
      console.log('"Poiret One" font cannot load');
    });
  }

}());
