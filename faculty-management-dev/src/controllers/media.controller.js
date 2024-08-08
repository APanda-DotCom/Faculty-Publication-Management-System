import multer from "multer";
import config from "../config";
import path from "path";
import fs from 'fs';
import repositories from "../repositories";
import httpStatus from "http-status";

const { mediaRepositories } = repositories;
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const { mediaType, mediaFor } = req.params;
    const fileDir = path.join(__dirname,
      `../../public/uploads/${mediaType}/${mediaFor}/`,
    );
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true }, (err) => {
        throw Error(err);
      });
    }

    file.thumbDir = fileDir;
    cb(null, `public/uploads/${mediaType}/${mediaFor}/`);
  },

  filename: (req, file, cb) => {
    const datetimestamp = Date.now();
    const filename = file.originalname.replace(/[^A-Z0-9.]/gi, '-');
    const fileArray = filename.split('.');
    const ext = fileArray.pop();
    cb(null, `${fileArray.join('-')}-${datetimestamp}.${ext}`);
  },
});

const uploadFile = multer({
  storage: config.app.mediaStorage === 'local' ? storage : null,
  fileFilter: (req, file, callback) => {
    const ext = path.extname(file.originalname);
    let fileFormats = [];
    if (req.params.mediaType === 'image') {
      fileFormats = ['.png', '.jpg', '.gif', '.jpeg'];
    } else if (req.params.mediaType === 'video') {
      fileFormats = ['.mp4', '.mov', '.wmv', '.mp4'];
    } else if (req.params.mediaType === 'audio') {
      fileFormats = ['.aac', '.m4a', '.mp3'];
    } else if (req.params.mediaType === 'file') {
      fileFormats = ['.pdf', '.doc', '.docx', '.txt'];
    } else if (req.params.mediaType === 'media') {
      fileFormats = ['.png', '.jpg', '.gif', '.aac', '.m4a', '.mp3', '.jpeg', '.pdf', '.doc', '.docx', '.mp4', '.mov', '.wmv'];
    }

    if (fileFormats.indexOf(ext.toLowerCase()) === -1) {
      return callback(
        new Error(`Allowed file format ${fileFormats.toString()}.`),
      );
    }
    callback(null, true);
  },
  limits: {
    fileSize: config.app.mediaUploadSizeLimit,
  },
});

export default {
  async uploadMediaNew(req, res, next) {

    try {
      const { params,headers } = req;
      const { mediaType } = params;
      params.mediaType = mediaType;
      uploadFile.any("file")(req, res, async (error) => {
        if (!error) {
          const result = await mediaRepositories.saveMedia(req);
          res.status(httpStatus.OK).json({
            message: "File Saved",
            baseUrl:`http://${headers.host}/${result.basePath}`,
          })
        } else {
          res.status(httpStatus.BAD_REQUEST).json({
            message: "Invalid file formate",
            data: null
          })
        }
      })
    } catch (error) {
      console.log(error)
      next(error);
    }
  },
}