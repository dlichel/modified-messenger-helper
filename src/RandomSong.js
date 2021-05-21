/*

NOTE: THIS IS A PRANK ON MY FRIENDS, THIS DOES NOT ACTUALLY SENDS A RANDOM SONG

*/
const Command = require("./Command.js");
var path = require("path");
const fs = require("fs");

module.exports = class RandomSong extends Command {
  constructor(ids) {
    super(ids);
    this.term = "/randomsong";
    this.description = " ";
    this.type = ["message", "message_reply"];
    this.needContent = false;
  }
  
  doAction(event, api) {
    const mediaDir = path.resolve(__dirname + "/../media/" + `troll.mp3`);  
    this.message.body =
        "Your Random Song is Here!"
    this.message.attachment = fs.createReadStream(mediaDir);
    super.send(event, api, this.message);
  }
};