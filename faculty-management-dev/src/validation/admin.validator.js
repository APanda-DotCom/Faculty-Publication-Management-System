import Joi from "joi"

const adminUpdateProfileSchema = Joi.object({
    email: Joi.string()
        .email()
        .min(6)
        .max(50)
        .messages({
            'any.required': 'EMAIL_REQUIRED',
            'string.empty': 'EMAIL_REQUIRED',
            'string.email': 'VALID_EMAIL_ALLOWED',
            'string.min': 'EMAIL_MIN_VALIDATION',
            'string.max': 'EMAIL_MAX_VALIDATION',
        })
        .required(),

    name: Joi.string().required()
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
        }),
    contact: Joi.string().required()
        .messages({
            'any.required': 'CONTACT_REQUIRED',
            'string.empty': 'CONTACT_REQUIRED',
        }),


});
const changeStatusSchema = Joi.object({
    id: Joi.number().integer().greater(0).required(),
    status: Joi.string().valid('active', 'inactive', 'deleted').required(),
  });

export default {adminUpdateProfileSchema,changeStatusSchema}
