import repositories from "../repositories";
import HttpStatus from "http-status"
import userRepository from "../repositories/user.repository";
const { userRepositories } = repositories;
export default {
    async updateProfile(req, res, next) {
        try {
            const result = await userRepositories.updateProfile(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: "profile updated", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },
    async getAllUsers (req, res, next) {
        try {
            const result = await userRepositories.getAllUsers(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: "users details", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },

    async getFaculty (req, res, next) {
        try {
            const result = await userRepositories.getfaculty(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: "users details", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },

    async getUser (req, res, next) {
        try {
            const result = await userRepositories.getUser(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: "user details", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },

      /**
   * Change user status
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   */
  async changeStatus(req, res, next) {
    try {
      const { body: { status }, params: { id } } = req;
      const bodyData = { id, status };
      await userRepositories.updateUserStatus(bodyData);
      res.status(HttpStatus.OK).json({ success: true, message: "user status update successfully",  });
    } catch (error) {
      next(error);
    }
  },

}