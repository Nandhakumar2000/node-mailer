/**
 * Created by nandhav.com's author on 18/02/2020.
 * emailController.js
 */
const mailer = require('../utils/mailer')

let sendMail = async (req, res) => {
  try {
     const to = req.query.email;
     console.log("query",req.query);
    const subject = req.query.title;
    const body =req.query.subject;
    await mailer.sendMail(to, subject, body)

    res.send('<h3>Your email has been sent successfully.</h3>')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports = {
  sendMail: sendMail
}