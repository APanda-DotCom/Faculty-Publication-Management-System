import HttpStatus from "http-status";

const validateRequest = (options) => async (req, res, next) => {
    try {

        await options.schema.validateAsync({
            ...req.query,
            ...req.body,
            ...req.params,

        });
        next();

    }
    catch (err) {
        console.log("validate m ", err)
        res.status(HttpStatus.BAD_REQUEST).json({ error: "bad request", message:"INVALID DATA ENTRY", success: false })
    }

}

export default validateRequest;