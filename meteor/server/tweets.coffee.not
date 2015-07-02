(function() {
  var fetchTweets;
  fetchTweets = function() {
    Twitter.remove({});
    return Meteor.http.get('http://search.twitter.com/search.atom?q=somafm', {}, function(e, r) {
      console.log('fetched new tweets');
      return Twitter.insert({
        content: r.content
      });
    });
  };
  return Meteor.startup(function() {
    return fetchTweets();
  });
})();
