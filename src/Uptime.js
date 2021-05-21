const Command = require("./Command.js");

module.exports = class Uptime extends Command {
  constructor(ids) {
    super(ids);
    this.term = "/Uptime";
    this.description = " ";
    this.type = ["message", "message_reply"];
    this.needContent = false;
  }

  doAction(event, api) {
    this.message.body =
      "正常运行时间: " +
      process.uptime() * 1000 +
      " 毫秒";
    super.send(event, api, this.message);
  }
};
