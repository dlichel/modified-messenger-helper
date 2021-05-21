const Command = require("./Command.js");
const fetch = require("node-fetch");
const trans = require('deepl-api');
const translate = require("deepl");
const { text } = require("cheerio/lib/static");

module.exports = class Translate extends Command {
  constructor(ids) {
    super(ids);
    this.term = "/tr";
    this.description = "[Reply + Language]";
    this.type = ["message", "message_reply"];
    this.needContent = true;
    this.message = {
      body: "",
    };
  };


  doAction(event, api) {
      //The text is just a reply to a message, but you can change it here.
      var textInput = super
      .cleanInput(event.messageReply.body);

      //Deepl Pro Free Trial only allows 500,000 characters a month, so this limits the text to not use all characters for the month all at once
      if(textInput.length > 500){
        textInput = textInput.substring(0, 500)
      }


      var inputLang = super.getContent(event)[0];
      translate({
        
        //If you actually paid for the API, change this
        free_api: true,

        text: textInput,
        target_lang: inputLang,
        
        //AuthKey here from Deepl API website
        auth_key: '',
      })
      .then(result => {
        this.message.body =
            "Translation: " +
            result.data["translations"][0]["text"];
        super.send(event, api, this.message);
      })
      .catch(error => {
        console.error(error)
        });
    
  }
};
