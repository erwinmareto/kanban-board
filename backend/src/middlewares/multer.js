const path = require('path')
const multer = require('multer')


const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!file) {
            next()
        }
        cb(null, './src/uploads')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  }
})


// const upload = (req, res) => {
//     console.log(req.file, "<<<<<<<<<<<<<<");
//     next()
//     // if (!req.file) {
//     //     next()
//     // }
//     // return multer({ storage: diskStorage }).single(img)
// }
const upload = multer({ storage: diskStorage })
module.exports = upload