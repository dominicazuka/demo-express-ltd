// Determine the origin (base URL) of the application based on the environment (production or development)
const appOrigin = process.env.NODE_ENV === "production" 
    ? "https://demoexpressltd.com"  // Production URL
    : "http://localhost:3000";      // Development URL

// Configuration for mailing service
const mailConfig = {
    // Configuration for "noreply" email account
    noreply: {
        user: process.env.MAIL_NOREPLY_USER,  // Username for the "noreply" email account
        password: process.env.MAIL_NOREPLY_PWD // Password for the "noreply" email account
    },

    // Configuration for "info" email account
    info: {
        user: process.env.MAIL_INFO_USER,     // Username for the "info" email account
        password: process.env.MAIL_INFO_PWD   // Password for the "info" email account
    },

    // Mail server port, determined based on the environment (production or development)
    port: process.env.NODE_ENV === 'production' 
        ? parseInt(process.env.MAIL_PORT, 10) // Port for production environment
        : 465,                                // Default port for development environment

    // Mail server host
    host: process.env.MAIL_HOST
}

// Admin email address for the application
const adminEmail = process.env.MAIL_ADMIN_EMAIL;

//jwt keys from env
const jwtKeys = {secret:process.env.JWT_SECRET, public:process.env.JWT_PUBLIC}

// Export the configuration values
module.exports = { appOrigin, mailConfig, adminEmail, jwtKeys };
