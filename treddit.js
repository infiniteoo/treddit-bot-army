const snoowrap = require('snoowrap');
const fs = require('fs');
const platoon = [];
const inq = require("inquirer");


init();


class Soldier {
    constructor(userId, secretId, username, password) {
        this.userId = userId,
            this.secretId = secretId,
            this.username = username,
            this.password = password,
            this.useragent = generateRandomAgent()
    };
};

function generateRandomAgent() {

    let randoNum = Math.floor((Math.random() * 1000) + 1);
    return (`user-agent-${randoNum}`);
};



function init() {

    clearScreen();
    openDatabase('army-roster.json');

};

function clearScreen() {

    console.log('\033[2J');

};

function openDatabase(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {

        if (err === null) {
            displayMainMenu(JSON.parse(data));

        };
    });
};


function displayMainMenu(database) {
    const m = require("./mainmenu");
    inq.prompt(m)
        .then(answer => {

            switch (answer) {


                case "Add A Soldier":

                    break;

                case "Display Platoon":

                    break;

                case "Upvote Post":

                    break;

                case "Quit":
                    process.exit();
            }




        });
};


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

    });
};


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
