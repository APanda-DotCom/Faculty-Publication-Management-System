import repositories from "../repositories";
import HttpStatus from "http-status"
const { publicationRepository } = repositories;
export default {
    async savePublication(req, res, next) {
        try {
            const result = await publicationRepository.savePublication(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: "publication saved", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },
    async getPublicationByUser(req, res, next) {
        try {
            const result = await publicationRepository.getPublicationByUser(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: "user publication detail", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },

    async getAllPublications(req, res, next) {
        try {
            const result = await publicationRepository.getAllPublications(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: " publication details", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },

    async importPublication(req, res, next) {
        try {
            const result = await publicationRepository.importPublication(req);
            if (result)
                res.status(HttpStatus.OK).json({ success: true, message: "publication saved", data: result });
            else
                res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "try again" });
        } catch (error) {
            next(error);
        }
    },
}