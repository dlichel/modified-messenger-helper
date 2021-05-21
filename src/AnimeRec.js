/*

THIS IS A PRANK ON MY FRIENDS, THIS DOES NOT ACTUALLY RECCOMEND AN ANIME

*/
const Command = require("./Command.js");

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = class AnimeRec extends Command {
  constructor(ids) {
    super(ids);
    this.term = "/animerec";
    this.description = " ";
    this.type = ["message", "message_reply"];
    this.needContent = false;
  }

  doAction(event, api) {
    this.message.body =
      "Anime reccomendation:\nKeroro Gunso (ケロロ軍曹, Keroro Gunsō)\nSeason 1, Episode " +
      getRandomInt(1, 7);
    super.send(event, api, this.message);
  }
};
