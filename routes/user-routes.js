module.exports = app => {
  const userController = require("../controllers/user-controller.js");
  const emailController = require("../controllers/email-controller.js");
  const emailsController = require("../controllers/emails-controller.js");

  let router = require("express").Router();

  // Retrieve all Users
  router.get("/", userController.findAll);

  // Retrieve a single User with username
  router.get("/:username", userController.findOne);

  // send an email to Single user:
  router.post("/send", emailController.sendSingleMail);

  // send an email to All users:
  router.post("/send-emails", emailsController.sendMail2All);

  // send email to US Based phone number users:
  router.post("/send-emails-US", emailsController.sendEmail2US);



  app.use("/api/users", router);
};