const Joi = require("joi");

module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      console.log(result);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }
      req.value["body"] = result.value;
      next();
    };
  },
  schemas: {
    authSchema: {
      signUp: Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string()
          .regex(/^[a-zA-Z0-9]{3,30}$/)
          .required(),
        confirmPassword: Joi.any()
          .valid(Joi.ref("password"))
          .required(),
        address: Joi.string().regex(/^[a-zA-Z]/),
        city: Joi.string().regex(/^[a-zA-Z]/),
        zip: Joi.string().regex(/^[0-9]/),
        country: Joi.string().regex(/^[a-zA-Z]/),
        cardNumber: Joi.string()
          .regex(/^[0-9]{16}$/)
          .required(),
        expirationDate: Joi.date().required(),
        ccv: Joi.number().required()
      }),
      signIn: Joi.object().keys({
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string()
          .regex(/^[a-zA-Z0-9]{3,30}$/)
          .required()
      })
    }
  }
};
