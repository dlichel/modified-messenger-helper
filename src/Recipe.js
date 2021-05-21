const Command = require("./Command.js");
var path = require("path");
const fs = require("fs");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = class Recipe extends Command {
    constructor(ids) {
        super(ids);
        this.term = "/bread";
        this.description = " ";
        this.type = ["message", "message_reply"];
        this.needContent = false;
    }

    doAction(event, api) {
        const mediaDir = path.resolve(__dirname + "/../media/" + `breadmaker.txt`);
        var textie = fs.readFileSync(mediaDir, 'utf8').split("----- Now You're Cooking! v5.31 [Meal-Master Export Format]");
        var rand = getRandomInt(1, textie.length);
        this.message.body =
            textie[rand];
        super.send(event, api, this.message);
    }
};