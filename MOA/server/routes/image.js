const express = require('express');
const router = express.Router();
const multer = require('multer');
const moment = require('moment');

const { Image } = require("../models/Image");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, moment().format('YYYYMMDDHHmm') + "_" + file.originalname)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.png' || ext !== '.jpg' ) {
            return cb(res.status(400).end('png or jpg 형식만 업로드할 수 있습니다!'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file")


//=================================
//             User
//=================================


router.post("/uploadFiles", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

})

router.get("/getImages", (req, res) => {

    Image.find()
        .populate('writer')
        .exec((err, images) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, images })
        })

});

router.post("/uploadImage", (req, res) => {

    const image = new Image(req.body)

    image.save((err, image) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

    console.log(req.body)

});


router.post("/getImageDetail", (req, res) => {

    Image.findOne({ "_id" : req.body.imageId })
    .populate('writer')
    .exec((err, image) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, image })
    })
});

module.exports = router;
