import Joi from "joi";

const adminSignInSchema = Joi.object({
  email: Joi.string()
    .email()
    .min(6)
    .max(50)
    .messages({
      "any.required": "EMAIL_REQUIRED",
      "string.empty": "EMAIL_REQUIRED",
      "string.email": "VALID_EMAIL_ALLOWED",
      "string.min": "EMAIL_MIN_VALIDATION",
      "string.max": "EMAIL_MAX_VALIDATION",
    })
    .required(),
  password: Joi.string().required().messages({
    "any.required": "PASSWORD_REQUIRED",
    "string.empty": "PASSWORD_REQUIRED",
  }),
});

const adminForgetPassword = Joi.object({
  email: Joi.string()
    .email()
    .min(6)
    .max(50)
    .messages({
      "any.required": "EMAIL_REQUIRED",
      "string.empty": "EMAIL_REQUIRED",
      "string.email": "VALID_EMAIL_ALLOWED",
      "string.min": "EMAIL_MIN_VALIDATION",
      "string.max": "EMAIL_MAX_VALIDATION",
    })
    .required(),
});

const resetPassword = Joi.object({
  newPassword: Joi.string().required().messages({
    "any.required": "PASSWORD_REQUIRED",
    "string.empty": "PASSWORD_REQUIRED",
  }),
  confirmPassword: Joi.string().required().messages({
    "any.required": "CONFIRM_PASSWORD_REQUIRED",
    "string.empty": "CONFIRM_PASSWORD_REQUIRED",
  }),
  token: Joi.string().required().messages({
    "string.empty": "TOKEN_REQUIRED",
  }),
});

const userSignupSchema = Joi.object({
  // name: Joi.string()
  //     .min(3)
  //     .max(50)
  //     .message({
  //         'any.required': "FIRST_NAME_REQUIRED",
  //         'string.empty': "FIRST_NAME_REQUIRED",
  //         'string.min': "FIRST_NAME_MINIMUM_VALIDATION",
  //         'string.max': "FIRST_NAME_MAXIMUM_VALIDATION"
  //     })
  //     .required(),
  userName:Joi.string().trim().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")).required(),
  // collageName: Joi.string().trim().min(3).max(50).optional().allow("", null),

  // contact: Joi.string(),
  //     .pattern(/[6-9]{1}[0-9]{9}/)
  //     .message({
  //         'any.max': "PHONE_NUMBER_MAXIMUM_VALIDATION",
  //         'string.empty': "PHONE_NUMBER_REQUIRED"
  //     })
  //     .required()
});

const userSigninSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")).required(),
});

const updateProfileImageSchema = Joi.object({
  profileImage: Joi.string().required(),
});

export default {
  adminSignInSchema,
  adminForgetPassword,
  resetPassword,
  updateProfileImageSchema,
  userSigninSchema,
  userSignupSchema,
};
