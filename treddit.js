const snoowrap = require('snoowrap');
const fs = require('fs');
const platoon = [];




class Soldier {
    constructor(userId, secretId, username, password) {
        this.userId = userId,
            this.secretId = secretId,
            this.username = username,
            this.password = password,
            this.useragent = generateRandomAgent()
    }
}

function generateRandomAgent() {

    let randoNum = Math.floor((Math.random() * 1000) + 1);
    return (`user-agent-${randoNum}`);

}

fs.readFile('army-roster.json', 'utf8', function (err, data) {

    if (err === null) {
       let db = JSON.parse(data);

       console.log(db);


    }




});

function draftSoldiers(db) {


    db.forEach(function (index) {

        let pieces = index.split(",");
        let fighter = new Soldier(pieces[0], pieces[1], pieces[2], pieces[3]);

        console.log(`
        userid: ${fighter.userId}
        secretid: ${fighter.secretId}
        username: ${fighter.username}
        password: ${fighter.password}
        user-agent: ${fighter.useragent}`);

        platoon.push(fighter);
    });

    fs.writeFile("test.json", JSON.stringify(platoon, null, 2), function (err) {

        if (err) throw err;
        console.log('written');

    })

}






/* const r = new snoowrap({
    userAgent: fighter.useragent,
    clientId: fighter.userId,
    clientSecret: fighter.secretId,
    username: fighter.username,
    password: fighter.password
});

// Submitting a link to a subreddit
r.getSubreddit('gifs').submitLink({
    title: 'Mt. Cameramanjaro',
    url: 'https://i.imgur.com/n5iOc72.gifv'
});

// Printing a list of the titles on the front page
r.getHot().map(post => post.title).then(console.log); */
