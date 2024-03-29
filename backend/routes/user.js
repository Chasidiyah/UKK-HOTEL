const express = require('express');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const SECRET_KEY = 'hotelmahal';

const auth = require('../middleware/auth');
const { uploadUser } = require('../middleware/uploadImage');
const user = require('../models/index').user;

const app = express();

/**
 * @apiRoutes {get} /hotel/user/
 * @apiName GetAllUsers
 * @apiGroup User
 * @apiDescription Get all users data
 */
app.get('/', async (req, res) => {
    await user.findAll()
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {get} /hotel/user/:id
 * @apiName GetUsersById
 * @apiGroup User
 * @apiDescription Get users data by id
 */
app.get('/:id', async (req, res) => {
    let params = { id_user: req.params.id };

    await user.findOne({ where: params })
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: error.message }))
});

app.get("/role/:role", auth, async (req, res) => {
    let param = {
      role: req.params.role
    }
    user.findAll({ where: param })
      .then(result => {
        res.json({
          data: result
        })
      })
      .catch(error => {
        res.json({
          message: error.message
        })
      })
  })

/**
 * @apiRoutes {post} /hotel/user/
 * @apiName PostUser
 * @apiGroup User
 * @apiDescription Insert user data
 */
app.post('/', uploadUser.single('foto'), async (req, res) => {
    if (!req.file) return res.json({ message: "No file uploaded" })

    // let finalImageURL = req.protocol + '://' + req.get('host') + '/user/' + req.file.filename;

    let data = {
        nama_user: req.body.nama_user,
        foto: req.file.filename,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role
    }

    await user.create(data)
        .then(result => res.json({ success: 1, message: "Data has been inserted", data: result }))
        .catch(error => res.json({ message: error.message }))
});

/**
 * @apiRoutes {put} /hotel/user/
 * @apiName PutUser
 * @apiGroup User
 * @apiDescription Update user data
 */
app.put("/", uploadUser.single("foto"), async (req, res) => {
    let param = {
      id_user: req.body.id_user
    }
    let data = {
      nama_user: req.body.nama_user,
      email: req.body.email,
      password: md5(req.body.password),
      role: req.body.role
    }
    if (req.file) {
      // get data by id
      const row = user.findOne({ where: param })
        .then(result => {
          let oldFileName = result.foto
  
          // delete old file
          let dir = path.join(__dirname, "../foto/user/", oldFileName)
          fs.unlink(dir, err => console.log(err))
        })
        .catch(error => {
          console.log(error.message);
        })
  
      // set new filename
      data.foto = req.file.filename
    }
    user.update(data, { where: param })
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

/**
 * @apiRoutes {delete} /hotel/user/:id
 * @apiName DeleteUser
 * @apiGroup User
 * @apiDescription Delete user data
*/
app.delete('/:id', async (req, res) => {
    let params = { id_user: req.params.id }

    let delImg = await user.findOne({ where: params });
    if (delImg) {
        let delImgName = delImg.foto;
        let loc = path.join(__dirname, '../foto/user/', delImgName);
        fs.unlink(loc, (err) => console.log(err));
    }

    await user.destroy({ where: params })
        .then(result => res.json({ success: 1, message: "Data has been deleted" }))
        .catch(error => res.json({ message: error.message }))
    //     try {
        //       let param = { id_menu: req.params.id }
    //       let result = await menu.findOne({ where: param })
    //       let oldFileName = result.gambar
      
    //       // delete old file
    //       let dir = path.join(__dirname, "../img", oldFileName)
    //       fs.unlink(dir, err => console.log(err))
    
    //       // delete data
    //       menu.destroy({ where: param })
    //         .then(result => {
        
        //           res.json({
    //             message: "data berhasil di hapus",
    //           })
    //         })
    //         .catch(error => {
    //           res.json({
    //             message: error.message
    //           })
    //         })
      
    //     } catch (error) {
    //       res.json({
    //         message: error.message
    //       })
    //     }
      
    //   })
});

/**
 * @apiRoutes {post} /hotel/user/admin
 * @apiName LoginUserAdmin
 * @apiGroup User
 * @apiDescription Login user admin
 */
app.post('/login', async (req, res) => {
    let param = {
        email: req.body.email,
        password: md5(req.body.password)
    }
    let result = await user.findOne({ where: param })    
        if (result) {
            let payload = JSON.stringify(result);
            let token = jwt.sign(payload, SECRET_KEY);
            res.json({ success: 1, message: "Login success, welcome back!", logged:true ,data: result, token: token })
        } else {
            res.json({ success: 0, logged: false, message: "Invalid email or password!" })
        }
});

/**
 * @apiRoutes {post} /hotel/user/resepsionis
 * @apiName LoginUserResepsionis
 * @apiGroup User
 * @apiDescription Login user resepsionis
*/
// app.post('/resepsionis', async (req, res) => {
//     let params = {
//         email: req.body.email,
//         password: md5(req.body.password),
//         role: 'resepsionis'
//     }
    
//     console.log(params)
//     await user.findOne({ where: params })
//         .then(result => {
//             if (result) {
//                 let payload = JSON.stringify(result);
//                 let token = jwt.sign(payload, SECRET_KEY);
//                 res.json({ success: 1, message: "Login success, welcome back!", token: token })
//             } else {
//                 res.json({ success: 0, message: "Invalid email or password!" })
//             }
//         })
//         .catch(error => res.json({ message: error.message }))
// });

module.exports = app;