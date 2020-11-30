const snoowrap = require('snoowrap');
var [userId, secretId, username, password] = [""];

const fs = require('fs');

function Soldier(userId, secretId, username, password) {
    this.userId = userId,
        this.secretId = secretId,
        this.username = username,
        this.password = password
}

fs.readFile('army-roster.txt', 'utf8', function (err, data) {

    if (err === null) {

        let db = data.split(",");
        let fighter = new Soldier(db[0], db[1], db[2], db[3]);

        console.log(`
        userid: ${fighter.userId}
        secretid: ${fighter.secretId}
        username: ${fighter.username}
        password: ${fighter.password}`);

    }


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
