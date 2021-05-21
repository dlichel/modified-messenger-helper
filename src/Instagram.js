/*
THIS COMMAND IS NOT FINISHED. IT IS STILL IN DEVELOPMENT AND WILL NOT WORK
*/
const Command = require("./Command.js");
const fs = require("fs");
const path = require("path");
const ffmpeg = require("ffmpeg.js");
const youtubedl = require('youtube-dl-exec');
const save = require('instagram-save');
let stdout = "";
let stderr = "";

module.exports = class Instagram extends Command {
  constructor(ids) {
    super(ids);
    this.term = "/ig";
    this.description = "[link]";
    this.type = ["message", "message_reply"];
    this.needContent = false;
    this.message = {
      body: "",
    };
  }

  doAction(event, api) {
    const mediaDir = path.resolve(__dirname + "/../media/" + `urge.png`); //directory the shibe file is going to
    
//     const video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
//   // Optional arguments passed to youtube-dl.
//     ['--format=18'],
//   // Additional options can be given for calling `child_process.execFile()`.
//     { cwd: __dirname });

//     video.on('info', function(info) {
//         console.log('Download started')
//         console.log('filename: ' + info._filename)
//         console.log('size: ' + info.size)
//     })
       
//     video.pipe(fs.createWriteStream('myvideo.mp4'))

    save('dU4fHDw-Ho', __dirname).then(res => {
        console.log(res.file);
    });

    /* let file = "";
    let url = "";
    var url =
      "https://i.ytimg.com/vi/kpmHgUo2JTc/maxresdefault.jpg";

    if (fs.existsSync(mediaDir)) {
      this.send(event, api, mediaDir);
    } else {
      super.downloadFile(url, mediaDir).then(() => {
        this.send(event, api, mediaDir);
      });
    } */


  }

  send(event, api, mediaDir) {
    
    // this.message.attachment = fs.createReadStream(mediaDir);
    // super.send(event, api, this.message);
    super.send(event, api, "Q");
  }
};