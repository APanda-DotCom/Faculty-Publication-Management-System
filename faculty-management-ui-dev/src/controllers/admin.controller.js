import repositories from "../repositories"
import  HttpStatus  from "http-status"

export default{

    async adminUpdateProfile(req,res,next){
        try{
         const result = await repositories.userRepositories.updateProfile(req);
         if(result){
            res.status(HttpStatus.OK).json({ success: true, message: "profile updated",data:result});
         } 
         else
          res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        }
        catch(err){
         next (err)
        }
    }
    
}