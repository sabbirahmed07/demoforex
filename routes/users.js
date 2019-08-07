const router = require("express-promise-router")();
const passport = require("passport");

const UsersController = require("../controllers/users");
const { validateBody, schemas } = require("../helpers/routeHelpers");
const passportConf = require("../passport");
const passportSignIn = passport.authenticate("local", { session: false });
const passportJWT = passport.authenticate("jwt", { session: false });
const passportGoogle = passport.authenticate("googleToken", { session: false });
const passportFacebook = passport.authenticate("facebookToken", {
  session: false
});

router
  .route("/signup")
  .post(validateBody(schemas.authSchema.signUp), UsersController.signUp);

router
  .route("/signin")
  .post(
    passportSignIn,
    validateBody(schemas.authSchema.signIn),
    UsersController.signIn
  );
router.route("/oauth/google").post(passportGoogle, UsersController.googleOAuth);

router
  .route("/oauth/facebook")
  .post(passportFacebook, UsersController.facebookOAuth);

router.route("/secret").get(passportJWT, UsersController.secret);

module.exports = router;
