import * as functions from 'firebase-functions';
const sgMail = require('@sendgrid/mail');
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const setBusinessAccount = functions.https.onRequest((request, response) => {
  const toEmail = request.params['toEmail'];
  const fromEmail = request.params['fromEmail'];
  //const subject = request.params['subject'];
  //const message  = request.params['message'];
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
  to: toEmail,
  from: fromEmail,
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
response.send({message: "done!"});
});
