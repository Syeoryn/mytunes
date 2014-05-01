// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(songData){

  },

  playFirst: function() {
    this.at(0).play();
  }


});
