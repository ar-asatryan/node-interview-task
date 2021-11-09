const db = require("../models/index.js");
const nodemailer = require("nodemailer");

const mailList = db.users.map((user) => user.email);
const filteredEmails = db.users
  .filter((user) => user.phone_number.toString().length < 11)
  .map((user) => user.email);
//console.log(filteredEmails);

const output = `
    <p>You have a new Test Email</p>
    <h3>More Details</h3>
    <ul>  
      <li>Sent Emails to all of you ${mailList}</li>
    </ul>
    <h3>Message</h3>
  `;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "ar.asatryan94@gmail.com",
    pass: "**********",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.sendMail2All = () => {
  for (let i = 0; i <= mailList.length - 1; i++) {
    let to = mailList[i];

    let message = {
      from: "ar.asatryan94@gmail.com",
      subject: "Test Email Content",
      html: output, // html body
    };

    message.to = to;
    function mailer(err, info) {
      if (err) {
        console.log("Sending to " + to + " failed: " + err);
        return;
      } else {
        console.log("Sent to " + to + info.response);
      }
      if (i === emails.length - 1) {
        message.transport.close();
      }
    }
    transporter.sendMail(message, mailer);
  }
};

exports.sendEmail2US = () => {
  for (let i = 0; i <= filteredEmails.length - 1; i++) {
    let to = filteredEmails[i];

    let message = {
      from: "ar.asatryan94@gmail.com",
      subject: "Test Email Content",
      html: output, // html body
    };

    message.to = to;
    function mailer(err, info) {
      if (err) {
        console.log("Sending to " + to + " failed: " + err);
        return;
      } else {
        console.log("Sent to " + to + info.response);
      }
      if (i === emails.length - 1) {
        message.transport.close();
      }
    }
    transporter.sendMail(message, mailer);
  }
};
