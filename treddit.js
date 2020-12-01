const snoowrap = require('snoowrap');
const fs = require('fs');
let platoon = [];
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
    initDatabase();

};

function clearScreen() {

    console.log('\033[2J');

};

function initDatabase() {
    fs.readFile('army-roster.json', 'utf8', (err, data) => {
        if (err === null) {
            platoon = buildPlatoon(JSON.parse(data));
            displayMainMenu();
        };
    });
};

function buildPlatoon(recruits) {
    recruits.forEach(index => {
        let fighter = new Soldier(
            index.userId,
            index.secretId,
            index.username,
            index.password
        );
        platoon.push(fighter);
    });
    return platoon;
};



function displayMainMenu(database) {
    const m = require("./mainmenu");
    inq.prompt(m)
        .then(answer => {

            switch (answer.mainMenu) {

                case "Add A Soldier":

                    break;

                case "Display Platoon":

                    displayDatabase();
                    displayMainMenu();
                    break;

                case "Upvote Post":

                    break;

                case "Quit":
                    process.exit();
            }
        });
};

function displayDatabase() {

    platoon.forEach(index => {

        console.log(`
        userid: ${index.userId}
        secretid: ${index.secretId}
        username: ${index.username}
        password: ${index.password}
        user-agent: ${index.useragent}`);
    });


};


function writeDatabase() {
    fs.writeFile("army-roster.json", JSON.stringify(platoon, null, 2), function (err) {

        if (err) throw err;
        console.log('written');

    });
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
