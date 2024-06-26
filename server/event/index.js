const { EventEmitter } = require('events')
const { mailNoReplyDispatcher, mailInfoDispatcher } = require('../util')
const { replyTemplate } = require('../util/templates')
const { replyTemplateAdmin } = require('../util/templatesAdmin')
const { adminEmail } = require('../config')
const eventManager = new EventEmitter()

// verification code user email dispatch
eventManager.on(
  'register_user_email_verification_notification',
  async payload => {
    // // console.log('payload', payload)
    try {
      const to = payload.email
      const message = `Dear ${payload.name}, <br/>
        <p>We are happy you signed up for Demo Express LTD. To start exploring your account, please confirm your email address.</p> <br/>

        <p><b>Verification code:</b> ${payload.verificationString}</p> <br/>

        <p>Welcome to Demo Express LTD</p> <br/>

        <p><b>Demo Express LTD Team.</b></p> <br/>
        `
      const html = await replyTemplate(message)
      const options = {
        to,
        html,
        subject: 'Verification Code - Demo Express LTD'
      }
      await mailNoReplyDispatcher(options)
    } catch (error) {
      // // console.log('mailNoReplyDispatcher error:', error)
    }
  }
)

// resend verification code user email dispatch
eventManager.on('resend_user_email_verification_code', async payload => {
  try {
    const to = payload.email
    const message = `Dear ${payload.name}, <br/>
        <p>Welcome to Demo Express LTD! Email verification successful, We're so excited to have you on board.</p> <br/>

        <p><b>Verification code:</b> ${payload.verificationString}</p> <br/>

        <p><b>Demo Express LTD Team.</b></p> <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Verification Code - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

// user email verified dispatch
eventManager.on('new_user_verified', async payload => {
  // console.log('payload', payload)
  try {
    const to = payload.email
    const message = `Dear ${payload.name}, <br/>
        <p>Welcome to Demo Express LTD! Email verification successful, We're so excited to have you on board.</p> <br/>

        <p><b>Demo Express LTD Team.</b></p> <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Welcome to Demo Express LTD - Email Verified'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

// user login notification dispatch
eventManager.on('login_notification', async payload => {
  // console.log('payload', payload)
  try {
    const to = payload.email
    const message = `Dear ${payload.name}, <br/>
        <p>We noticed a new sign-in to your Account on a device. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.</p>
            <p>Your last login details are as follows:</p>
            <ul>
                <li><b>IP Address:</b> ${payload.lastLoginIpAddress}</li>
                <li><b>Device:</b> ${payload.lastLoginDevice}</li>
                <li><b>Date:</b> ${new Date(
                  payload.lastLoginDate
                ).toLocaleString()}</li>
            </ul>
            <br/>
            <p><b>Demo Express LTD Team.</b></p>
            <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Login Notification - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

// update password notification dispatch
eventManager.on('update_password_notification', async payload => {
  // console.log('payload', payload)
  try {
    const to = payload.email
    const message = `Dear ${payload.name}, <br/>
        <p>We noticed a new password reset initiated on your account. If this was you, you don’t need to do anything. If not, we’ll help you secure your account.</p>
            <p>The request was generated from below device details:</p>
            <ul>
                <li><b>IP Address:</b> ${payload.lastLoginIpAddress}</li>
                <li><b>Device:</b> ${payload.lastLoginDevice}</li>
                <li><b>Date:</b> ${new Date(
                  payload.lastLoginDate
                ).toLocaleString()}</li>
            </ul>
            <br/>
            <p><b>Demo Express LTD Team.</b></p>
            <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Password Changed Notification - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

// resend verification code user email dispatch
eventManager.on('forgot_password_request_notification', async payload => {
  try {
    const to = payload.email
    const message = `Dear ${payload.name}, <br/>
          <p>You recently initiated a forgot password process on our platform, kindly find below the required code.</p> <br/>
  
          <p><b>Verification code:</b> ${payload.verificationString}</p> <br/>
  
          <p><b>Demo Express LTD Team.</b></p> <br/>
          `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Forgot Password Verification Code - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

// admin user delete request notification dispatch
eventManager.on('user_delete_request_notification', async payload => {
  // console.log('payload', payload)
  try {
    const to = adminEmail
    const message = `Dear Admin, <br/>
        <p>We would like to inform you that a user has requested the deletion of their account. Below are the details of the user who initiated the deletion request:</p> <br/>
            <p>User details:</p>
            <ul>
                <li><b>Name:</b> ${payload.name}</li>
                <li><b>Email:</b> ${payload.email}</li>
                <li><b>Date of Request:</b> ${new Date(
                  payload.lastLoginDate
                ).toLocaleString()}</li>
            </ul>
            <br/>
            <p>Please review the deletion request and take the necessary actions. If you have any questions or need further assistance, please do not hesitate to contact support team.</p><br/>
            <p><b>Demo Express LTD Team.</b></p>
            <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Account Delete Request Notification - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

//super admin new partner added notification dispatch
eventManager.on('super_admin_new_partner_added', async payload => {
  // console.log('payload', payload)
  try {
    const to = adminEmail
    const message = `Dear Admin, <br/>
        <p>A new partner has been added by ${payload.user.name} (${
      payload.user.email
    }).</p> <br/>
            <p>Partner Details:</p>
            <ul>
                <li><b>Name:</b> ${payload.partnerName}</li>
                <li><b>Phone Number:</b> ${payload.phoneNumber}</li>
                <li><b>Email</b> ${payload.email}</li>
                <li><b>Services</b> ${payload.servicesOffered.join(', ')}</li>
                <li><b>Address</b> ${payload.address}</li>
                <li><b>Country</b> ${payload.country}</li>
            </ul>
            <br/>
            <p>Please review the information and take the necessary actions. If you have any questions or need further assistance, please do not hesitate to contact support team.</p><br/>
            <p><b>Demo Express LTD Team.</b></p>
            <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'New Partner Added Notification - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

//new partner welcome email dispatch
eventManager.on('new_partner_welcome_email', async payload => {
  // console.log('payload', payload)
  try {
    const to = payload.email
    const message = `Dear ${payload.partnerName}, <br/>
        <p>We are thrilled to welcome you to Demo Express LTD!</p> <br/>
        <p>As our new partner, you are now part of a community dedicated to "connecting customers with need of exceptional services."</p> <br/>
            <p>Partner Account Details:</p>
            <ul>
                <li><b>Name:</b> ${payload.partnerName}</li>
                <li><b>Phone Number:</b> ${payload.phoneNumber}</li>
                <li><b>Email</b> ${payload.email}</li>
                <li><b>Services</b> ${payload.servicesOffered.join(', ')}</li>
                <li><b>Address</b> ${payload.address}</li>
                <li><b>Country</b> ${payload.country}</li>
            </ul>
            <br/>
            <p>Please review the information and take the necessary actions. If you have any questions or need further assistance, please do not hesitate to contact support team.</p><br/>
            <p><b>Demo Express LTD Team.</b></p>
            <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Welcome to Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

//super admin partner edited notification dispatch
eventManager.on('super_admin_partner_edited', async payload => {
  // console.log('payload', payload)
  try {
    const to = adminEmail
    const message = `Dear Admin, <br/>
        <p>A partner has been edited by ${payload.user.name} (${
      payload.user.email
    }).</p> <br/>
            <p>Updated Partner Details:</p>
            <ul>
                <li><b>Name:</b> ${payload.partnerName}</li>
                <li><b>Phone Number:</b> ${payload.phoneNumber}</li>
                <li><b>Email</b> ${payload.email}</li>
                <li><b>Services</b> ${payload.servicesOffered.join(', ')}</li>
                <li><b>Address</b> ${payload.address}</li>
                <li><b>Country</b> ${payload.country}</li>
            </ul>
            <br/>
            <p>Please review the information and take the necessary actions. If you have any questions or need further assistance, please do not hesitate to contact support team.</p><br/>
            <p><b>Demo Express LTD Team.</b></p>
            <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Partner Updated Notification - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})

//super admin partner deleted notification dispatch
eventManager.on('super_admin_partner_deleted', async payload => {
  // console.log('payload', payload)
  try {
    const to = adminEmail
    const message = `Dear Admin, <br/>
        <p>A partner has been deleted by ${payload.user.name} (${
      payload.user.email
    }).</p> <br/>
            <p>Deleted Partner Details:</p>
            <ul>
                <li><b>Name:</b> ${payload.partnerName}</li>
                <li><b>Phone Number:</b> ${payload.phoneNumber}</li>
                <li><b>Email</b> ${payload.email}</li>
                <li><b>Services</b> ${payload.servicesOffered.join(', ')}</li>
                <li><b>Address</b> ${payload.address}</li>
                <li><b>Country</b> ${payload.country}</li>
            </ul>
            <br/>
            <p>Please review the information and take the necessary actions. If you have any questions or need further assistance, please do not hesitate to contact support team.</p><br/>
            <p><b>Demo Express LTD Team.</b></p>
            <br/>
        `
    const html = await replyTemplate(message)
    const options = {
      to,
      html,
      subject: 'Partner Deleted Notification - Demo Express LTD'
    }
    await mailNoReplyDispatcher(options)
  } catch (error) {
    // console.log('mailNoReplyDispatcher error:', error)
  }
})
module.exports = eventManager
