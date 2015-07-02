var tweets;

tweets = null;

Template.tweets.feed = function() {
  var data;
  data = Twitter.findOne({});
  if (data) {
    tweets = $(data.content).find("entry").map(function() {
      var author, el, o;
      o = {};
      el = $(this);
      author = el.find("author").text();
      o.author = author.replace(/\(.*\)/, '').replace(/http\:\/\/twitter.com\/.*/, '');
      o.title = el.find("title").text().replace(/\#nowplaying/, '').replace(/http\:\/\/t.co\/.*/, '').replace(/[^\w\s]/gi, '');
      return o;
    });
  }
  return tweets;
};
