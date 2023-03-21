const express = require('express');
const path = require('path');
const fs = require('fs');

const auth = require('../middleware/auth');
const { uploadTypeRoom } = require('../middleware/uploadImage');
const tipe_kamar = require('../models/index').tipe_kamar;
const kamar = require('../models/index').kamar;

const app = express();

/**
 * @apiRoutes {get} /hotel/type-room/
 * @apiName GetAllTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Get all type room data
 */
app.get('/', async (req, res) => {
    await tipe_kamar.findAll({ include: ['kamar'] })
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {get} /hotel/type-room/:id
 * @apiName GetTypeRoomById
 * @apiGroup TypeRoom
 * @apiDescription Get type room data by id
 */
app.get('/:id', async (req, res) => {
    let params = { id_tipe_kamar: req.params.id };

    await tipe_kamar.findOne({ where: params, include: ['kamar'] })
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {post} /hotel/type-room/
 * @apiName PostTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Insert type room data
 */
app.post('/', uploadTypeRoom.single('foto',), async (req, res) => {
    if (!req.file) return res.json({ message: "No file uploaded" })

    // let finalImageArrayURL = [];

    // req.files.forEach((file) => {
    //     let finalImageURL = req.protocol + '://' + req.get('host') + '/img/' + file.filename;
    //     finalImageArrayURL.push(finalImageURL);
    // });

    let data = {
        nama_tipe_kamar: req.body.nama_tipe_kamar,
        harga: req.body.harga,
        deskripsi: req.body.deskripsi,
        foto: req.file.filename
    }

    await tipe_kamar.create(data)
        .then(result => res.json({ success: 1, message: "Data has been inserted", data: result }))
        .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {put} /hotel/type-room/
 * @apiName PutTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Update type room data
 */
app.put("/", uploadTypeRoom.single("foto"), async (req, res) => {
    let param = {
      id_tipe_kamar: req.body.id_tipe_kamar
    }
    let data = {
      nama_tipe_kamar: req.body.nama_tipe_kamar,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga
    }
    if (req.file) {
      // get data by id
      const row = tipe_kamar.findOne({ where: param })
        .then(result => {
          let oldFileName = result.foto
  
          // delete old file
          let dir = path.join(__dirname, "../foto/room/", oldFileName)
          fs.unlink(dir, err => console.log(err))
        })
        .catch(error => {
          console.log(error.message);
        })
  
      // set new filename
      data.foto = req.file.filename
    }
    tipe_kamar.update(data, { where: param })
      .then(result => {
        res.json({
          message: "Data Berhasil Diperbarui"
        })
      })
      .catch(error => {
        res.json({
          message: error.message
        })
      })
  })
// app.put('/:id', uploadTypeRoom.single('foto',), async (req, res) => {
//     if (!req.file) return res.json({ message: "No file uploaded" })

//     let params = { id_tipe_kamar: req.params.id };
//     let data = {
//         nama_tipe_kamar: req.body.nama_tipe_kamar,
//         harga: req.body.harga,
//         deskripsi: req.body.deskripsi
//     }

//     if (req.files) {
//         let delImg = await tipe_kamar.findOne({ where: params });

//         if (delImg) {
//             let delImgName = delImg.foto;
//             delImgName.forEach((img) => {
//                 let imgName = img.split('/').pop();

//                 let loc = path.join(__dirname, '../foto/room/' + imgName);
//                 fs.unlinkSync(loc, (err) => console.log(err));
//             });
//         }

//         let finalImageArrayURL = [];

//         req.files.forEach((file) => {
//             let finalImageURL = req.protocol + '://' + req.get('host') + '/img/' + file.filename;
//             finalImageArrayURL.push(finalImageURL);
//         });

//         data.foto = finalImageArrayURL;
//     }

//     await tipe_kamar.update(data, { where: params })
//         .then(result => res.json({ success: 1, message: "Data has been updated" }))
//         .catch(error => res.json({ message: error.message }))
// });

/**
 * @apiRoutes {delete} /hotel/type-room/:id
 * @apiName DeleteTypeRoom
 * @apiGroup TypeRoom
 * @apiDescription Delete type room data
 */
app.delete("/:id", async (req, res) => {
    try {
      let param = { id_tipe_kamar: req.params.id }
      let result = await tipe_kamar.findOne({ where: param })
      let oldFileName = result.foto
  
      // delete old file
      let dir = path.join(__dirname, "../foto/room/", oldFileName)
      fs.unlink(dir, err => console.log(err))
  
      // delete data
      tipe_kamar.destroy({ where: param })
        .then(result => {
  
          res.json({
            message: "data berhasil di hapus",
          })
        })
        .catch(error => {
          res.json({
            message: error.message
          })
        })
  
    } catch (error) {
      res.json({
        message: error.message
      })
    }
  
  })

module.exports = app;