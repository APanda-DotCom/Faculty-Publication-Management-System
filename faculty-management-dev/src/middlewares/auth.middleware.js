import  HttpStatus from "http-status";
import jwt from "../services/jwt"; 
import userRepositories from "../repositories/user.repository";


const authValidate=async(req,res,next)=>{
    try{
        
        if(req?.headers?.authorization){
            const part=req.headers.authorization.split(' ')
            if(part.length==2)
            {
              const scheme=part[0]
              const token=part[1]
              if(/^Bearer$/i.test(scheme))
              {
                
                const verifyToken=jwt.verifyToken(token)
                if(verifyToken)
                {
                  const user = await userRepositories.findOne({token:token})
                 
                  if(user&&(user.status==='active'))
                  {
              
                    req.user=user
                    next()
                  }
                }
                else
                {
                    res.status(HttpStatus.BAD_REQUEST).json({success:false,message:"TOKEN NOT FOUND"})  
                }
              }
              else
               {
                res.status(HttpStatus.BAD_REQUEST).json({success:false,message:"TOKEN BAD_FORMAT"}) 
               }
            }
            else
            {
                res.status(HttpStatus.UNAUTHORIZED).json({success:false,message:"UNAUTHORIZED_ACCESS"}) 
            }
        }
        else{
           return res.status(HttpStatus.UNAUTHORIZED).json({success:false,message:"UNAUTHORIZED_ACCESS"})
        }
    }
    catch(err){
        err.status = HttpStatus.UNAUTHORIZED;
        next(err);
        
    }
 

}

export default authValidate;