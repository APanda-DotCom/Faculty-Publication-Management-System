import jwt from "jsonwebtoken";
import config from "../config";

export default {

    createToken(payload) {
        return jwt.sign(payload, config.jwt_secret, {
            expiresIn: config.jwt_expire
        });

    },

    verifyToken(token) {
        return jwt.verify(token, config.jwt_secret, {
            expiresIn: config.jwt_expire,
        });
    }
}