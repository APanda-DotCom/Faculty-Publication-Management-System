import HttpStatus from "http-status";
import repositories from "../repositories";


const{eventManagerRepository}=repositories
export default{
  async checkEventManagerExist(req,res,next){
    try{
        const{id}=req.params
        const result=await eventManagerRepository.getEventManagerDetails({id:id})
        if(!result)
        {
            res.status(HttpStatus.BAD_REQUEST).json({success:false,message:"Event Manager NOT FOUND"});
        }
        else
        {
            req.eventManagerInfo=result
            next()
        }
    }
    catch(err){
        next(err)
    }
  }
}