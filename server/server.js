const express = require("express");
const cors = require('cors');
const fileupload = require("express-fileupload");
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = require('http').Server(app);

app.post("blog/upload/image", async (req, res, next) => {
  console.log("here");
  let sampleFile;
  let uploadPath;
  let data_aid = req.body.aid;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  sampleFile = req.files.files;
  uploadPath = __dirname + '\\uploads\\blogpost\\';

  fs.mkdir(path.join(uploadPath, data_aid), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });

  sampleFile.mv(uploadPath + data_aid + "\\" + sampleFile.name, function (err) {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.send({ link: 'uploads\\blogpost\\' + data_aid + "\\" + sampleFile.name });
    }
  });
});

app.get("/files/:path", async (req, res, next) => {
  console.log(req.params['path']);
});

server.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});