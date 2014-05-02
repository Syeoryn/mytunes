// SongQueueView.js - Defines a backbone view class for the song queue.
// creates SongQueueEntryViews for each queued song & renders them
// renders when add or remove event fires from the song queue collection
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    //   this.collection.on('add', function(){
    //     this.render();
    //     console.log('addddex');
    //   }, this);

    // this.collection.on('remove', function(){
    //   console.log('removed');
    // },this);

  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
