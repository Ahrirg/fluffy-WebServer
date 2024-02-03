const express = require("express");
const fs = require('fs')
const path = require('path')
const cors = require('cors');
const app = express();


const Port = 6900;

app.use(cors()); 

app.set("views", path.join(__dirname, "views"));

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "public")));


app.use('/app', require('./routes/app'));
app.use('/upload', require('./routes/upload'));
app.use('/api', require('./routes/api'));


app.get('/', (req, res) => {
  res.render('Main');
})

app.get('/CC', (req, res) => {
  res.render('CC');
})

app.get('/TBA', (req, res) => {
  res.render('TBA');
})


//startup
const CC_dir = path.join(__dirname, '/CustomCodes')

fs.readdir(CC_dir, (err, DATA) => {
  if (err) {
    console.log(err)
  } else {
    for(var i = 0; i < DATA.length; i++) {
      fs.readFile(CC_dir + `/${DATA[i]}/NodeSettings.txt`, (err, settings) => {
        var List = settings.toString().split('\n')
        if(List[0].toString().replace('Startup: ', '') == 'true') {

          var Fname = List[2].toString().replace('Fname: ', '')

          const formData = new FormData();
          formData.append('Fname', Fname.toString());

          console.log("issiuntem")
          fetch('http:/localhost:6900/app', {
            method: 'POST',
            body: formData,
          })
        }
      })
    }
  }
})


app.listen(Port, function() {
  console.log("Running on port " + Port + ".");
});