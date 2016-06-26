/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['icons/','splash.png','images/','icon.png']
    },
    babel: {
      includePolyfill: true,
      optional: ['es7.decorators']
    },
    'ember-cli-qunit': {
      useLintTree: false
    }
  });

  var pickFiles = require('broccoli-static-compiler');
  var mergeTrees = require('broccoli-merge-trees');

  // PhoneFormat
  app.import('bower_components/phoneformat.js/dist/phone-format.js');
  app.import('bower_components/phoneformat.js/dist/phone-format-global.js');

  // Font-Awesome
  var fontAwesomeFonts = pickFiles('bower_components/components-font-awesome/fonts', {
    srcDir: '/',
    destDir: '/fonts'
  });

  // Leaflet User Marker
  app.import('bower_components/leaflet-usermarker/src/leaflet.usermarker.js');
  app.import('bower_components/leaflet-usermarker/src/leaflet.usermarker.css');
  var leafletUserMarker = pickFiles('bower_components/leaflet-usermarker/src/img', {
      srcDir: '/',
    destDir: 'assets/img/'
  });

  return mergeTrees([app.toTree(), fontAwesomeFonts, leafletUserMarker]);
};
