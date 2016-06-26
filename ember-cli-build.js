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

  // PhoneFormat
  app.import('bower_components/phoneformat.js/dist/phone-format.js');
  app.import('bower_components/phoneformat.js/dist/phone-format-global.js');

  return app.toTree();
};
