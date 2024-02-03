const multer = require('multer');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const AdmZip = require('adm-zip');

const CC_dir = path.join(__dirname, '/../CustomCodes') 
const dbZIP = path.join(__dirname, "/../Temp/downloadsZIP") 

router.use(cors()); // Allows incoming requests from any IP

// creating disk storage options:
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
  
// Set saved storage options:
const upload = multer({ storage: storage })

function deletionsfolder(loc) {
  fs.rmdirSync(loc) // deletinam temp folder
  console.log('Folder named = "' + loc + '" deleted!');
  
}

function deleteDownload() {
  fs.rmSync(CC_dir + '/../Temp/downloads', { recursive: true }) // delete all downloads

  fs.mkdirSync(CC_dir + '/../Temp/downloads' , (err) => {
    if (err) {
      console.log(err)
    }
  })
}

function deletionsfile(loc) {
  fs.unlink(loc, (err) => {
    console.log(err);
  })  // deletinam temp file
  console.log('File named = "' + loc + '" deleted!');
}




router.post("/", upload.array("files"), (req, res) => { // HOLY SHIT, it works, BUT HOLY SHIT i improved quite a lot since here
    console.log('cia 111111111')
    console.log(req.body)

    for(let i = 0; i < req.files.length; i++) {

        var zipname = req.files[i].filename;

        var zippath = path.join(dbZIP, zipname);

        console.log(zippath)

      if(zipname.slice(-4) == '.zip') {

        var zip = new AdmZip(zippath);
        zip.extractAllTo(CC_dir + "/../Temp/downloads", true);

        fs.readdir(CC_dir + "/../Temp/downloads", (err, filestemp) => {
          if (err) {
            console.log(err); 
          } else {
            if(filestemp[1] == undefined && filestemp[0].includes('.') == false) { // negal but folderi '.' XD lol
              console.log('cia buvom ?1');

              fs.rename(CC_dir + '/../Temp/downloads/' + filestemp[0].toString(), CC_dir + '/' + req.body.Fname.toString(), (err) => { //cia perkel
                if(err) {
                  console.log(err + 'wtf')
                }
                 console.log('cia buvom ?2');
                 fs.rename(CC_dir + '/../Temp/downloads', CC_dir + '/' + filestemp[0].toString(), (err) => { //sync
                   if(err) {
                     console.log(err)
                   }
   
                   fs.mkdir(CC_dir + '/../Temp/downloads' , (err) => { //sync
                     if (err) {
                       console.log(err)
                     }
                     console.log('cia buvom ?3');
                   })
 
                   //make a ServerSetting.txt
                   var Viduriai = "Startup: "+ req.body.Startup.toString() + "\n" + "Console: "+ req.body.Console.toString() + "\n" + "Fname: "+ req.body.Fname.toString() + "\n" + "EXEname: "+ req.body.EXEname.toString() + "\n" + "Launcher: "+ req.body.Launcher.toString();

                   fs.writeFile(CC_dir + '/' + req.body.Fname.toString() + '/NodeSettings.txt', Viduriai, { flag: 'w'}, err => console.log(err)); //sync

                  try {
                    deletionsfolder(CC_dir + '/' + filestemp[0])  // deletinam temp download file galbut biski apacoi visa temp purge padaryt but u know
                  } catch(err) {
                    console.log(err);
                  }
                   console.log('cia buvom 4?   ' + CC_dir + '/' + filestemp[0] + '/NodeSettings.txt');
 
                   res.status(200).json({ message: "File uploaded, extracted & config created successfully" });
                   res.end();
                   
                 })
                
              })
            } else {

              res.status(400).json({ message: "Executable must be nested insited folder and that folder needs to be zipped" });
              res.end();


              try {
                deleteDownload(); // deletinam temp download file galbut biski apacoi visa temp purge padaryt but u know
              } catch(err) {
                console.log(err);
              }

            }
          } 
          
          deletionsfile(zippath) // deletinam zip
          try {
            deleteDownload(); // deletinam temp download file galbut biski apacoi visa temp purge padaryt but u know
          } catch(err) {
            console.log(err);
          }

        })

      } else {

        try {
          deletionsfile(zippath);
        } catch(err) {
          console.log(err);
        }

        res.status(400).json({ message: "JIBANSKI PIDERASTI NOT A ZIP DAUNE - Bugis" });
        res.end();

      }
    }

});

module.exports = router;