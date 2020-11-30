const snoowrap = require('snoowrap');

const fs = require('fs');

fs.readFile('army-roster.txt', 'utf8', function (err, data) {
    let db = data.split(",");
    console.log(db);

});






/* const r = new snoowrap({
    userAgent: 'treddit',
    clientId: 'VCKLiN-rhsI26A',
    clientSecret: 'ECes_AB7exURjiC1a0nR_plxgS4',
    username: 'RadiantStandard4',
    password: 'blahblah'
  });

  // Submitting a link to a subreddit
r.getSubreddit('gifs').submitLink({
    title: 'Mt. Cameramanjaro',
    url: 'https://i.imgur.com/n5iOc72.gifv'
  });

  // Printing a list of the titles on the front page
  r.getHot().map(post => post.title).then(console.log); */
