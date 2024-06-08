const mjmlUtils = require("mjml-utils"); // Import mjml-utils for handling MJML templates
const path = require("path"); // Import path for handling file paths

// Define the path to the admin reply email template
const replyTemplatePath = path.join(__dirname, "../public/templates/replyTemplateAdmin.html");

// Function to generate the HTML content for an admin reply email
const replyTemplateAdmin = async (message) => {
    // Inject the message into the MJML template and convert it to HTML
    const html = await mjmlUtils.inject(replyTemplatePath, { message });
    return html; // Return the generated HTML
}

// Export the replyTemplateAdmin function for use in other parts of the application
module.exports = { replyTemplateAdmin };
