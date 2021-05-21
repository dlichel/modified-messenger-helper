const fs = require("fs");
const path = require("path");
const glob = require("glob");
const login = require("facebook-chat-api");
const Timeout = require("./src/Timeout");

////////////////////////////////////////////////////ImportCommands////////////////////////////////////////////////////
var commandList = [];
var ignoredList = [];

glob.sync("./src/*.js").forEach((file) => {
  if (
    !ignoredList.map((command) => "./src/" + command + ".js").includes(file)
  ) {
    commandList.push(require(file));
  }
});

console.log(commandList);

////////////////////////////////////////////////////LoginWithCookies////////////////////////////////////////////////////
const databaseDir = path.resolve(__dirname + "/database/");

login(
  { appState: JSON.parse(fs.readFileSync("database/appstate.json", "utf8")) },
  (err, api) => {
    if (err) return console.error(err);

    fs.writeFileSync(
      databaseDir + "/appstate.json",
      JSON.stringify(api.getAppState())
    ); //store cookies

    ////////////////////////////////////////////////////Setoptions////////////////////////////////////////////////////
    api.setOptions({
      listenEvents: true,
      selfListen: true,
      forceLogin: true,
    });

    ////////////////////////////////////////////////////ChangeVars////////////////////////////////////////////////////

    //In order to stop facebook from flagging your bot as a spam bot, you will need to time out your bot.
    //This is in milliseconds, all we know is that 10 seconds between each command works
    const use = new Timeout(10000); 

    // add the threadID of chats you want enabled
    threadIDs = [
      "2401681243197992",
      "100033671532178",
      "3900927206691315",
      "100007466028701",
    ];

    ////////////////////////////////////////////////////ListenLoop////////////////////////////////////////////////////
    api.listenMqtt((err, event) => {

      if (!use.inTimeout(event.threadID)) {
        for (var command in commandList) {
          new commandList[command](threadIDs).listen(event, api, use);
        }

      }
    });
  }
);
