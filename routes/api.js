const express = require('express');
const router = express.Router();
const os = require('os');
const osu = require('node-os-utils');
const nodeDiskInfo = require('node-disk-info'); // https://www.npmjs.com/package/node-disk-info
const fs = require('fs');
const path = require('path')
const cors = require('cors')
const multer = require('multer')

router.get('/div', (req, res) => {
  fs.readdir(path.join(__dirname, "../CustomCodes"), (err, folderContent) => {
    if (err) {
      console.log(err)
    } else {
      const formData = new FormData();
      formData.append('Fname', folderContent);
      res.json(folderContent);
    }
  })
})

router.get('/Tools', (req, res) => {
  fs.readFile(path.join(__dirname, "../Tools.txt"), (err, folderContent) => { //fixed
    if (err) {
      console.log(err)
    } else {
      res.json(folderContent.toString('utf-8'));
    }
  })
})

router.get('/Ip', (req, res) => { //IP
  var networkInterfaces = os.networkInterfaces();
  //console.log(networkInterfaces);// this shows what u need
  var ip;
  try {
    ip = networkInterfaces.eth0[0].address
  } catch (error) {
    ip = networkInterfaces.Ethernet[1].address //change this
  }//Incase ip dosent work this check might be wrong uncomment console.log and see what u need to change into
  res.json({adress: ip})

})


router.get('/TaskManagerInfo', (req, res) => {
  var cpu = osu.cpu
  var mem = osu.mem
  
  var CpuUsage
  var RamUsage
  var StorageUsage

  var Uptime = os.uptime()


  cpu.usage()
  .then(cpuPercentage => {
    CpuUsage = cpuPercentage

      try {
        const disks = nodeDiskInfo.getDiskInfoSync();
        var diskproc = [];
        for (const disk of disks) {
          diskproc.push(disk.capacity)
        }
        var addedproc = 0;
        for (var disk of diskproc) {
          disk = disk.slice(0, -1)
          var skaicius = parseInt(disk)
          addedproc += skaicius;
        }
        StorageUsage = addedproc/diskproc.length
      } catch (e) {
        console.error(e);
      }

    mem.info()
    .then(info => {
        RamUsage = info.usedMemPercentage

        var formData = {
          CpuUsage: CpuUsage, 
          RamUsage: RamUsage,
          StorageUsage: StorageUsage,
          Uptime: Uptime,
        }

        res.json(formData);
    })
  })
})

router.get('/ToolsPage', (req, res) => {
  res.render('Tools');
})



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


router.post('/ToolsAdd',uploads.array('files'),  (req, res) => {
  var Tname = req.body.Tname
  var link = req.body.link
  if (link != '' && Tname != '') {
    var datas = "\n" + link + '|' + Tname
    fs.appendFile(path.join(__dirname, "../Tools.txt"), datas, (err) => {
      if(err) {
        console.error(err)
      } 
      console.log('tipo irase')
    })
  }
})

router.post('/ToolsDelete',uploads.array('files'), (req, res) => {
  fs.unlink(path.join(__dirname, "../Tools.txt"), (err) => { //galbut tik vieno ./ tereik
    if(err) {
      console.log(err)
    }
    fs.writeFile(path.join(__dirname, "../Tools.txt"),'http://192.168.10.1|Tp-Link', (err) => {
      if(err) {
        console.log(err)
      }
    })
  })
})

router.use('/Process', require('./Process'));

module.exports = router;