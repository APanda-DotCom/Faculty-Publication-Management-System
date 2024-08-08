import HttpStatus from "http-status";
import repositories from "../repositories";


const{eventRepositories}=repositories
export default{
  async checkEventExist(req,res,next){
    try{
        const{id}=req.params
        const eventResult=await eventRepositories.getEventDetails({id:id})
        if(!eventResult)
        {
            res.status(HttpStatus.BAD_REQUEST).json({success:false,message:"Event NOT FOUND"});
        }
        else
        {
            req.eventInfo=eventResult
            next()
        }
    }
    catch(err){
        next(err)
    }
  }
}