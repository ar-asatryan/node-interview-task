module.exports = app => {
  const mongoose = require('mongoose');
  const db = require("../models/index.js");
  const userController = require("../controllers/user-controller.js");
  const emailController = require("../controllers/email-controller.js");
  const emailsController = require("../controllers/emails-controller.js");

  let router = require("express").Router();

  // Retrieve all Users
  router.get("/", userController.findAll);

  // Retrieve a single User with username
  router.get("/:userName", userController.findOne);

  router.post("/", (req, res) => {
      const users = db.users;
      //console.log(users);
      res.send(users);
    });

  // send an email to Single user:
  router.post("/send", emailController.sendSingleMail);

  // send an email to All users:
  router.post("/send-emails", emailsController.sendMail2All);

  // send email to US Based phone number users:
  router.post("/send-emails-US", emailsController.sendEmail2US);



  app.use("/api/users", router);
};