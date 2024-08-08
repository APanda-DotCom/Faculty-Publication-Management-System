import HttpStatus from "http-status";
import repositories from "../repositories"

import accountRepositories from "../repositories/account.repository";



export default {
  async signIn(req, res, next) {
    try {
      const admin = await repositories.accountRepositories.singnIn(req);
      if (admin.status) {
        res.status(HttpStatus.OK).json({ success: true, message: "signIn success", token: admin.token, userData: admin.userData });
      }
      res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "unvalid credential" });
    }
    catch (err) {

    }
  },



  

  async userSignup(req, res, next) {
    try {
      const result = await repositories.accountRepositories.userSignup(req);
      if (result.success) {
        res.status(HttpStatus.OK).json({
          message: result.message,
          success:true,
          data: result.userData,
        })
      } else {
        res.status(HttpStatus.BAD_REQUEST).json({
          message: result.message,
          success:false
        })
      }
    } catch (error) {
      next(error);
    }
  },

  async userLogout(req,res,next){
    try {
       const result=await accountRepositories.logOut(req);
      
     if(result)
     res.status(HttpStatus.OK).json({success:true,message:"LOGOUT SUCCESSFUL" })
     
     res.status(HttpStatus.BAD_REQUEST).json({
        message:'USER_NOT_FOUND' ,
        data:null,
        success:false
      })
    } catch (error) {
     
      next(error)

    }
  },

  async userSignin(req, res, next) {
    try {
      const result = await repositories.accountRepositories.userSignin(req);
      if (result.success) {
        res.status(HttpStatus.OK).json({
          message: result.message,
          data: result,
          success:true
        })
      } else {
        res.status(HttpStatus.BAD_REQUEST).json({
          message: result.message,
          data:result,
          status:false
        })
      }
    } catch (error) {
      next(error);
    }
  },
  async updateProfile(req, res, next) {

    try {
      const result = await repositories.accountRepositories.updateProfile(req);
      if (result)
        res.status(HttpStatus.OK).json({ success: true, message: "Profile Image Uploaded ", data: result });
      else
        res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
    }
    catch (err) {
      next(err)
    }
  }

}