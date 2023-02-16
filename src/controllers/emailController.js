const nodemailer = require("nodemailer");

const sendEmail = async (fromAddress, toAddress, subject = null, textContent = null, htmlContent = null) => {
    let transporter = nodemailer.createTransport({
        host: "prodsendgridaz1.pru.intranet.asia",
        port: 25,
        secure: false, // true for 465, false for other ports
      });

      let mailOptions = {
        from: fromAddress, // sender address
        to: toAddress, // list of receivers
        subject: subject ?? "Test subject", // Subject line
        text: textContent ?? "Sample text content", // plain text body
        html: htmlContent ?? "<b>Sample html content</b>"// html body
      };

      let info = await transporter.sendMail(mailOptions);

      const messageId = info.messageId;
      console.log(`Email sent - ${messageId}`);

      return messageId;
};

module.exports = {
    sendEmail
}