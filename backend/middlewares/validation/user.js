const { check, validationResult } = require("express-validator");

exports.validateUserInfo = [
  check("userName")
    .trim()
    .not()
    .isEmpty()
    .isAlpha()
    .withMessage("Username should be valid")
    .isLength({ min: 3, max: 20 })
    .withMessage("Invalid Username"),
  check("email").normalizeEmail().isEmail().withMessage("Invalid Email"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 20 })
    .withMessage("Invalid Password"),
  check("confirmpassword")
    .trim()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password and Confirm Password are not same");
      }
      return true;
    }),
];

exports.userValidateMessage = (req,res,next) => {
  const result = validationResult(req).array();
  if(!result.length){
    return next();
  }

  const errMessage = result[0].msg;
  res.json({success:false, message:errMessage})
  
}

exports.signInValidation = [
  check("email").normalizeEmail().isEmail().withMessage("Invalid Email"),
  check("password")
    .trim()
    .not()
    .isEmpty()    
    .withMessage("Invalid Password") 
]