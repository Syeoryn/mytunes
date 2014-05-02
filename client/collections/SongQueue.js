// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(songData){
    this.on('ended',function(){
      //console.log(this.models[0])
      this.remove(this.models[0]);
      if(this.models.length){
        this.playFirst();
      }
    },this);

    this.on('add',function(){
      if(this.models.length === 1){
        this.playFirst();
      }
    },this);

    this.on('dequeue',function(song){
      this.remove(song);
    },this);
  },

  playFirst: function() {
    this.at(0).play();
  }


});
