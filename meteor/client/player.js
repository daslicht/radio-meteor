var currentChannel;

currentChannel = function() {
  var name;
  name = Session.get('channel');
  if (name) {
    return channels[name];
  }
};

Template.player.channels = function() {
  var c, i, len, ref, results;
  ref = _.keys(channels).sort();
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    c = ref[i];
    results.push({
      name: c,
      playing: c === Session.get('channel')
    });
  }
  return results;
};

Template.player.playing = function() {
  return this.name === Session.get('channel');
};

Template.player.paused = function() {
  return !Session.get('channel');
};

Template.player.events({
  'click button': function(e) {
    var evt, id;
    evt = e;
    id = e.srcElement != null ? e.srcElement.id : e.currentTarget.id;
    return mtrPlayer.setChannel((id === 'stop' ? '' : id.split('-')[1]));
  }
});

Template.player.srcUrl = function() {
  var ref, ref1, ref2;
  if (((ref = currentChannel()) != null ? (ref1 = ref.tags) != null ? ref1.indexOf('soma') : void 0 : void 0) > -1) {
    return "http://ice.somafm.com/" + Session.get('channel');
  } else {
    return (ref2 = currentChannel()) != null ? ref2.url : void 0;
  }
};

Template.player.tags = function() {
  var channel;
  if ((channel = currentChannel()) === 'soma') {
    return 'soma';
  } else {
    return channel != null ? channel.tags : void 0;
  }
};

Template.player.rendered = function() {
  return mtrPlayer.play();
};

