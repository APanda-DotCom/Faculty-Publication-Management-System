import HttpStatus from "http-status";
import repositories from "../repositories";


const{audienceRepository}=repositories
export default{
  async checkAudienceExist(req,res,next){
    try{
        const{id}=req.params
        const result=await audienceRepository.getAudienceDetails({id:id})
        if(!result)
        {
            res.status(HttpStatus.BAD_REQUEST).json({success:false,message:"Audience NOT FOUND"});
        }
        else
        {
            req.audienceInfo=result
            next()
        }
    }
    catch(err){
        next(err)
    }
  }
}