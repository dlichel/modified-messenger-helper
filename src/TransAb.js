const Command = require("./Command.js");

module.exports = class TransAb extends Command {
  constructor(ids) {
    super(ids);
    this.term = "/trlist";
    this.description = " ";
    this.type = ["message", "message_reply"];
    this.needContent = false;
  }

  doAction(event, api) {
    this.message.body =
      //Unfortunently, this is just copy and pasted from the website
      "BG - Bulgarian\nCS - Czech\nDA - Danish\nDE - German\nEL - Greek\nEN - English\nES - Spanish\nET - Estonian\nFI - Finnish\nFR - French\nHU - Hungarian\nIT - Italian\nJA - Japanese\nLT - Lithuanian\nLV - Latvian\nNL - Dutch\nPL - Polish\nPT - Portuguese (all Portuguese varieties mixed)\nRO - Romanian\nRU - Russian\nSK - Slovak\nSL - Slovenian\nSV - Swedish\nZH - Chinese";
    super.send(event, api, this.message);
  }
};