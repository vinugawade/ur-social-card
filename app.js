const env = require('dotenv');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const multer = require('multer');
const imgbbUploader = require("imgbb-uploader");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

env.config();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.you) {
    res.redirect('/card');
  }
  res.render('index');
});

app.post('/add_profile', upload.single('profile_photo'), (req, res, next) => {

  const url = imgbbUploader(process.env.IMG_API_KEY, req.file.path)
    .then((respond) => {
      fs.unlinkSync(req.file.path);
      return respond.display_url;
    });

  const save_user = async () => {
    url.then((url) => {
      user = {
        uuid: uuidv4(),
        profile_photo: url,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        type: req.body.type,
        insta: req.body.insta,
        fb: req.body.fb,
        twit: req.body.twit,
        wp: req.body.wp,
        github: req.body.github,
        linkedin: req.body.linkedin,
        stack: req.body.stack
      };
      res.cookie('you', user).send();
      return true;
    });
  };
  if(save_user()){
  }
});

app.get('/card', (req, res) => {
  res.render('QR');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});