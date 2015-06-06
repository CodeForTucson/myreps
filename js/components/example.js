define(function (require) {


  // Dependencies
  var Backbone = require('backbone'),
      $ = require('jquery'),
      _ = require('underscore');


  // Log Libs
  var View = Backbone.View.extend({
    events: {
      'submit #addressForm': 'queryData'
    },


    initialize: function () {
      this.template = _.template( this.$('#repTemplate').html() );
    },


    queryData: function (e) {
      var self = this;

      // prevent submission
      if (e && e.preventDefault) {
        e.preventDefault();
      };


      var address = this.$('#addressInput').val();
      var url = 'https://www.googleapis.com/civicinfo/v2/representatives';


      // Fetch data
      $.get( url, {
        address: address,
        key: "AIzaSyC9jqSPozmt_XeDruK0ChZkjXn_3Ez5lGA"
      }).done(function( data ) {
        self.processData(data.officials);
      });


      // prevent submission
      return false;
    },


    processData: function (officials) {
      var html = '';

      officials.reverse();

      for (var i = officials.length - 1; i >= 0; i--) {
        html += this.template(officials[i]);
      };

      this.$('.results').html( html );
    }
  });


  var view = new View({el: 'body'});


});
