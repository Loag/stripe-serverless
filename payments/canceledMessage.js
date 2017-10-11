const nodemailer = require('nodemailer');
// ** this emails a user when their payment bounces or they concel their subscription **
module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: process.env.MAILGUN_USER,
      pass: process.env.MAILGUN_PASSWORD
    }
  });
  const mailOptions = {
    from: 'noReply@YOUR_DOMAIN.EXT',
    to: data.email,
    subject: 'Charge Error: Subscription canceled',
    text: 'Hello,\n\n You are recieving this because your card connected to your account could not be charged. Your service has been deactivated.\n\n You will not be billed next month.'
  };
  transporter.sendMail(mailOptions, (err) => {
    console.log(mailOptions);
    if (!err) {
      callback(null, { statusCode: 200 });  
    } else {
      console.log(err);
    }
  });
}