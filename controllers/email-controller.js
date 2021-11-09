const { SINGLE_EMAIL } = require("../configs/constants.js");
const nodemailer = require("nodemailer");

exports.sendSingleMail = () => {
  const output = `
    <p>You have a new Test Message</p>
    <h3>More Details</h3>
    <ul>  
      <li>Sent Email for you ${SINGLE_EMAIL}</li>
    </ul>
    <h3>Message</h3>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "ar.asatryan94@gmail.com",
      pass: "*******",
    },
    tls: {
      rejectUnauthorized: false
    },
  });

  let mailOptions = {
    from: "ar.asatryan94@gmail.com",
    to: SINGLE_EMAIL,
    subject: "Test Email Content",
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log("Sent to " + to + info.response);
      console.log('Message sent: %s', info.messageId);   
  });
};