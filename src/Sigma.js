
//Though technically a prank, I am just including this here for reference how to attatch a random image
//To a random line in a text.

const Command = require("./Command.js");
var path = require("path");
const fs = require("fs");
const glob = require("glob");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var fileList = [];

module.exports = class Sigma extends Command {
    constructor(ids) {
        super(ids);
        this.term = "/sigma";
        this.description = " ";
        this.type = ["message", "message_reply"];
        this.needContent = false;
    }
    

    doAction(event, api) {
        const mediaDir = path.resolve(__dirname + "/../media/" + `sigma.txt`);
        var textie = fs.readFileSync(mediaDir, 'utf8').split("\n");
        var rand = getRandomInt(1, textie.length);
        
        const directoryPath = path.join(__dirname, '/../sigma/');
        //passsing directoryPath and callback function

        fs.readdirSync(directoryPath).forEach(file => {
            fileList.push(file);
            console.log(file);
        });
        
        var randFile = getRandomInt(1, fileList.length);
        
        this.message.attachment = fs.createReadStream(directoryPath + fileList[randFile]);
        this.message.body =
          textie[rand];
        super.send(event, api, this.message);
    }
};