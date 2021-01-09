const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user', require('./routes/user'));
app.use('/api/video', require('./routes/video'));
app.use('/api/image', require('./routes/image'));
app.use('/api/profile', require('/routes/profile'));


app.use('/uploads', express.static('uploads'));

if (process.env.NODE_ENV === "production") {
    
    app.use(express.static("client/build"));
      
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }
  


const port = 5000;
app.listen(port, () => console.log(`App listening on port ${port}`))