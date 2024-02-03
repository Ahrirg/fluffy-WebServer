const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { spawn } = require('child_process');
const router = express.Router();
const WebSocket = require('ws');
const { loadavg } = require('os');

const wss = new WebSocket.Server({port: 3000})

const CC_dir = path.join(__dirname, '/../CustomCodes')

// const router = express();
function deleteuploads() {
  fs.rmSync(CC_dir + '/../Temp/uploads', { recursive: true }) // delete uploads

  fs.mkdirSync(CC_dir + '/../Temp/uploads' , (err) => {
    if (err) {
      console.log(err)
    }
  })
}

router.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, dbZIP);
  },
  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
  // Sets saved filename(s) to be original filename(s)
})

const uploads = multer({ storage: storage })



router.post("/", uploads.array('files'),  (req, res) => { 
  var FName = req.body.Fname;
  var Loader = "";
  var ExeName = "";

  fs.readdir(CC_dir, (err, data) => {
    for (var x in data) {
      if (data[x].toString() == FName) {
        fs.readFile(CC_dir + "/"+ FName + "/NodeSettings.txt", 'utf8' , (erras, settigs) => {
          if(err) {
            console.log(erras)
          }
          var txt = settigs.toString().split("\n");
          ExeName = txt[3].replace("EXEname: ", "");
          Loader = txt[4].replace("Launcher: ", "");

          deleteuploads();

          console.log(Loader + " " +  ExeName)
          var childPython
          if(Loader == "") {
            childPython = spawn(ExeName, {cwd:  CC_dir + '/' + FName + '/'});
          } else {
            childPython = spawn(Loader,[ExeName], {cwd:  CC_dir + '/' + FName + '/'});
          }
          console.log(FName + " =-= Pajunktas")
          wss.on("connection", function connection(ws) {
            ws.on('message', function incoming(msg) {
              const sk = msg.toString().split('/');
              if(sk[1] == "kill" & sk[0] == FName) {
                childPython.kill('SIGINT')
              }
            })
              childPython.stdout.on('data', function (data) {
                var fulldata = data.toString()
                //console.log(FName+ '/'+fulldata);
                ws.send(FName+ '/'+fulldata)
              });
  
              childPython.stderr.on('data', (data) => {
                var fulldata = `[ERR] ` + data.toString();
                //console.error(FName+ '/'+ fulldata);
                ws.send(FName+ '/'+fulldata);
              })
  
              childPython.on('close' , (data) => {
                var fulldata = `[Stoped] `+ data;
                console.error(FName + fulldata);
                ws.send(FName+ '/'+fulldata);
                console.log("The connection has been closed successfully ["+ FName +"]");
              })
          }) 
        })

           res.status(200).json({ message: "Suveike" });
           res.end();  
      }
    }
  })});

  router.post('/delete', uploads.array('file'), (req, res) => {
    var FName = req.body.Fname;
    console.log(FName)
    
    fs.rmSync(CC_dir + '/' + FName, { recursive: true }) // delete all downloads
    res.status(200).json({ message: "istryne" });
    res.end();  
  })

module.exports = router;