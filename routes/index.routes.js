
const express = require('express')
const router = express.Router()
const upload = require('../config/upload')
const { route } = require('./user.routes')
const bucket = require('../config/multer.config')


router.get('/home', (req, res) => {
    res.render('home')
})

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  blobStream.on('error', (err) => {
    console.error(err);
    res.status(500).send('Upload failed.');
  });

  blobStream.on('finish', () => {
    // Construct public URL (optional, only works if file is publicly accessible)
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    res.status(200).send({ message: 'Upload successful!', url: publicUrl });
  });

  blobStream.end(req.file.buffer);
});



module.exports = router