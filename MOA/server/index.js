const express = require('express');
const app = express();
const cors = require('cors');


const config = require("./config/key");

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

app.use(cors());

if (process.env.NODE_ENV === "production") {
    
    app.use(express.static("client/build"));
      
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }


const port = 5000;
app.listen(port, () => console.log(`App listening on port ${port}`))