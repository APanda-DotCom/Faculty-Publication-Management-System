import models from "../models";
import bcrypt from "bcryptjs";
import jwt from "../services/jwt";
import utility from "../services/utility";
import constant from "../constant";


const { user, userDevice } = models
const { commonConstant } = constant
export default {

  async singnIn(req) {
    try {
      const { email, password } = req.body;
      const adminResult = await user.scope(commonConstant.ROLE.ADMIN).findOne({ where: { email: email } });

      if (adminResult && adminResult.role === commonConstant.ROLE.ADMIN) {
        if (await this.comparePassword(password, adminResult.dataValues.password)) {
          const token = jwt.createToken({ email: adminResult.email });
          const { ...userData } = adminResult.get();
          await adminResult.update({ token: token })
          return { status: true, message: "password matched", token, userData }
        }
        return { status: false, message: "password not matched" }
      }
      return { status: false, message: "admin does not exist" }
    }
    catch (err) {
      console.log(err)
      return false;
    }

  },



  async updateProfile(req) {
    try {
      const bodyData = req.body;
      const where = { id: bodyData.id };
      const userData = await user.findOne({ where });
      return await userData.update({ profileImageURL: bodyData.profileImage });
    }
    catch (err) {
      throw Error(err)

    }

  },




  async comparePassword(password, hashPassword) {
    try {
      let isPasswordMatch = '';
      if (password && hashPassword) {
        isPasswordMatch = await bcrypt.compare(password, hashPassword);
      }
      return isPasswordMatch;
    } catch (error) {

    }
  },

  async Encryptedpassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  },

  

  async generatePasswordResetToken(req) {
    try {
      const token = utility.generateString()
      await user.update({ passwordResetToken: token }, { where: { email: req } });
      return token;
    } catch (err) {

    }
  },

  async logOut(req) {
    try {
      const user = req.user;
      const data = { token: null };
      return await user.update(data);
    }
    catch (err) {
      throw Error(err)
    }

  },

  async userSignup(req) {
     const transaction = await models.sequelize.transaction();
    try {
     
      const bodyData = req.body;
      bodyData.role = "user";
      const findUser = await user.scope(commonConstant.ROLE.USER).findOne({ where: { email: bodyData.email } });
      if (findUser)
        return { success: false, message: "EMAIL ALREADY TAKEN" }
      bodyData.password = await this.Encryptedpassword(bodyData.password);
      const userData = await user.create(bodyData,  transaction );
      await transaction.commit();
      return { success: true, message: "SIGNUP SUCCESSFULL", userData }
    } catch (error) {
      await transaction.rollback();
      return { success: false, message: "SIGNUP FAILED" }
    }
  },



  async checkEmailExistence(email) {
    try {
      const isEmailExist = await user.findOne({ where: { email } })
      return isEmailExist;
    } catch (error) {
      throw new Error(error);
    }
  },



  

  async userSignin(req) {
    try {
      const { email, password } = req.body;
      const userResult = await user.scope(commonConstant.ROLE.USER).findOne({ where: { email: email } });
      if (userResult && userResult.role === commonConstant.ROLE.USER) {
        const userData = await this.checkEmailExistence(email);
        if (userData) {
          if(userData.status!='active')
            {
              return { success: false, message: "User Inactive" };
            }
          if (await this.comparePassword(password, userData.password)) {
            const token = jwt.createToken({ email: email });
            const { ...userDetails } = userResult.get();
            await userResult.update({ token: token })
            userDetails.token = token;
            
            return { success: true, message: "SIGN IN SUCCESSFULL", userDetails }
          }
          return { success: false, message: "INVALID PASSWORD" };
        }
        return { success: false, message: "INVALID EMAIL" };
      }
      return { success: false, message: "USER NOT FOUND" }
    } catch (error) {
      next(error);
    }
  }
}



