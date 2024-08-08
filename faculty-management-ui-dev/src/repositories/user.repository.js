
import { Op, where } from "sequelize";
import models from "../models"

const{user}=models
export default{
    async updateProfile(req){
      try{
        const bodyData=req.body
        await user.update(bodyData,{where:{id:bodyData.id}});
        const attributes={exclude: ['password', 'token',"passwordResetToken" ]}
        const userDetail = await user.findOne({ where: { id:bodyData.id} ,attributes  },);
        return userDetail;
      }
      catch(err){
        console.log(err);
      }
    },
    async findOne(where) {
      try {
        const attributes = { exclude: 'password'};
        return await user.findOne({ where,attributes });
      } catch (error) {
      
       console.log(error)
      }
    },

    async getAllUsers(req) {
      try {
        const {
          query: {
            limit, offset,
          },
        } = req;
        const attributes={exclude: ['password', 'token',"passwordResetToken" ]}
        const userDetails = await user.findAndCountAll({
          limit: parseInt(limit || 10),
          offset: parseInt(offset || 0),
          where:{ id: {
            [Op.ne]: req.user.id
          }, 
             role:'user'},
          attributes
        });
        return userDetails;
      }
      catch (err) {
        console.log(err);
      }
    },

      /**
   * Update the status of a user.
   * @param {Object} data - Data containing the user ID and new status
   * @returns {Object} - The updated user data
   */
  async updateUserStatus(data) {
    try {
      const where = { id: data.id };
      const userData = await user.findOne({ where });
      const userStatus = data.status;
      return await userData.update({ status: userStatus });
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  },

  async getfaculty(req) {
    try {
        const { userName, facultyName, experience, email } = req.query;

        const attributes = {
            exclude: ['password', 'token', 'passwordResetToken'],
            include: ['id', 'userName', 'email', 'facultyName', 'profileImageURL']
        };

        // Build the where clause dynamically based on the request query parameters
        const whereClause = {
            id: {
                [Op.ne]: req.user.id
            },
            status: 'active',
            role: 'user',
        };

        if (userName) {
            whereClause.userName = { [Op.like]: `%${userName}%` };
        }

        if (facultyName) {
            whereClause.facultyName = { [Op.like]: `%${facultyName}%` };
        }

        if (experience) {
            whereClause.experience = experience;
        }

        if (email) {
            whereClause.email = { [Op.like]: `%${email}%` };
        }

        const userDetails = await user.findAndCountAll({
            where: whereClause,
            attributes
        });

        return userDetails;
    }
    catch (err) {
        console.log(err);
    }
},

  async getUser(req) {
    try {
      
      const attributes = {
        exclude: ['password', 'token', 'passwordResetToken'],
    
      };
      const userDetails = await user.findAndCountAll({
        where:{ id: req.params.id, status:'active',
           role:'user'},
        attributes
      });
      return userDetails;
    }
    catch (err) {
      console.log(err);
    }
  },
}