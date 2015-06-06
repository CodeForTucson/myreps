// RequireJS Setup
require.config({
  paths: {
    "backbone": "lib/backbone",
    "jquery": "lib/jquery",
    "underscore": "lib/underscore"
  },
  urlArgs: window.REQUIRE_NOCACHE ? "bust="+(new Date()).getTime() : null
});


// Main application bootstrapper
define(function() {
  require(['components/example']);
});
