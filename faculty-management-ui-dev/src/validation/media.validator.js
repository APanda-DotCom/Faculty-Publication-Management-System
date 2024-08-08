import Joi from "joi";

const uploadSchema = Joi.object({
    mediaFor:Joi.string()
    .valid("user").messages({'any.apply':'media for required'}).required(),
    mediaType:Joi.string()
    .valid('image','video','media','icon','file','audio')
    .messages({'any.apply':'media for required'}).required(),
    apiName:Joi.string().optional().empty().allow('')
})

export default{
    uploadSchema
};