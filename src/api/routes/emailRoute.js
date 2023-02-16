const express = require('express');
const { sendEmail } = require("../../controllers/emailController");
const { success, error } = require('./util');

const router = express.Router();

router.post('/send-email', async (req, res) => {
    try {
        const { fromAddress, toAddress, subject, textContent, htmlContent } = req.body;

        const messageId = await sendEmail(fromAddress, toAddress, subject, textContent, htmlContent);

        res.status(200).json(success(res.statusCode, `Email sent successfully : ${messageId}`, { messageId }));
    } catch (err) {
        req.log.error(err, 'Error occured in /send-email');
        return res.status(500).json(error(res.statusCode, err.message));
    }
});

module.exports = router;