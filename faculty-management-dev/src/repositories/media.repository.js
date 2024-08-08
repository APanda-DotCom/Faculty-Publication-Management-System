import models from "../models";
import constant from "../constant"
import path from "path"


const {commonConstant} = constant
const{media} = models;

export default{

    async saveMedia(req){
       try {
        const{params,files,headers,connection} = req;
        const file = files[0];
        const mediaType = params.mediaType;
        const imageDir = path.join(__dirname, `../../${file.path}`);
        const HTTPs = connection.encrypted === undefined ? 'http' : 'https';
        const mediaData = {
            name: file.filename || file.originalname,
            basePath: file.path ,
            imagePath: imageDir,
            mediaType,
            mediaFor: params.mediaFor,
            status: commonConstant.MEDIA.MEDIA_STATUS.PENDING
          };
        const result = await media.create(mediaData);
        return result;
       } catch (error) {

        console.log(error)
       }
    },
}