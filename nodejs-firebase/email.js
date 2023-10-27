const nodemailer = require('nodemailer');
require('dotenv').config();

const sendemail =(userEmail)=>{
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  // Create a transporter using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

// Verify the transporter configuration
transporter.verify((error) => {
  if (error) {
    console.log('Nodemailer configuration is not working properly:', error);

  } else {
    console.log('Nodemailer is ready to send emails.');
    const mailOptions = {
      from: email, // Use the email you configured in mailer.js
      to:userEmail,
      subject:'New  user account',
      text:'Welcome to our employee app'
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
  }
});
}

module.exports = sendemail;
