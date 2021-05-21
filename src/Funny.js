const Command = require("./Command.js");
var path = require("path");
const fs = require("fs");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = class Funny extends Command {
    constructor(ids) {
        super(ids);
        this.term = "/funny";
        this.description = " ";
        this.type = ["message", "message_reply"];
        this.needContent = false;
    }

    doAction(event, api) {
        const mediaDir = path.resolve(__dirname + "/../media/" + `topMessages.txt`);
        var textie = fs.readFileSync(mediaDir, 'utf8').split("(((s)))");
        var rand = getRandomInt(1, textie.length);
        console.log("Funny Command Used Once.")
        this.message.body =
          textie[rand];
        super.send(event, api, this.message);
    }
};