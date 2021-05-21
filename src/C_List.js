
//Hard coded for now, due to me wanting to hide commands temporarily

const Command = require("./Command.js");

module.exports = class C_List extends Command {
  constructor(ids) {
    super(ids);
    this.term = "/commands";
    this.description = " ";
    this.type = ["message", "message_reply"];
    this.needContent = false;
  }

  doAction(event, api) {
    this.message.body =
        "/trlist\n/tr [LANG] (reply to message)\n/animerec\n/Uptime\n/randomsong\n/funny\n/sigma"
    super.send(event, api, this.message);
  }
};