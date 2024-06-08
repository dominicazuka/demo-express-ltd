const {EventEmitter} = require('events');
const { mailNoReplyDispatcher, mailInfoDispatcher } = require('../util');
const {replyTemplate} = require('../util/templates');
const {replyTemplateAdmin} = require('../util/templatesAdmin');
const { adminEmail } = require('../config');
const eventManager = new EventEmitter();


// verification code user email dispatch
eventManager.on("register_user_email_verification_notification", async (payload) => {
    console.log("payload", payload);
    try {
        const to = payload.email;
        const message = `Dear ${payload.name}, <br/>
        <p>We are happy you signed up for Demo Express LTD. To start exploring your account, please confirm your email address.</p> <br/>

        <p><b>Verification code:</b> ${payload.verificationString}</p> <br/>

        <p>Welcome to Demo Express LTD</p> <br/>

        <p><b>Demo Express LTD Team.</b></p> <br/>
        `;
        const html = await replyTemplate(message);
        const options = {
            to,
            html,
            subject: "Verification Code - Demo Express LTD"
        }
        await mailNoReplyDispatcher(options);
    } catch (error) {
        console.log("mailNoReplyDispatcher error:", error);
    }
});

// resend verification code user email dispatch
eventManager.on("resend_user_email_verification_code", async (payload) => {
    try {
        const to = payload.email;
        const message = `Dear ${payload.name}, <br/>
        <p>Welcome to Demo Express LTD! Email verification successful, We're so excited to have you on board.</p> <br/>

        <p><b>Verification code:</b> ${payload.verificationString}</p> <br/>

        <p><b>Demo Express LTD Team.</b></p> <br/>
        `;
        const html = await replyTemplate(message);
        const options = {
            to,
            html,
            subject: "Verification Code - Demo Express LTD"
        }
        await mailNoReplyDispatcher(options);
    } catch (error) {
        console.log("mailNoReplyDispatcher error:", error);
    }
});

// user email verified dispatch
eventManager.on("new_user_verified", async (payload) => {
    console.log('payload', payload)
    try {
        const to = payload.email;
        const message = `Dear ${payload.name}, <br/>
        <p>Welcome to Demo Express LTD! Email verification successful, We're so excited to have you on board.</p> <br/>

        <p><b>Demo Express LTD Team.</b></p> <br/>
        `;
        const html = await replyTemplate(message);
        const options = {
            to,
            html,
            subject: "Welcome to Demo Express LTD - Email Verified"
        }
        await mailNoReplyDispatcher(options);
    } catch (error) {
        console.log("mailNoReplyDispatcher error:", error);
    }
});

module.exports = eventManager;