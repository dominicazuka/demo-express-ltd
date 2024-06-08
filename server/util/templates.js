const mjmlUtils = require("mjml-utils"); // Import mjml-utils for handling MJML templates
const path = require("path"); // Import path for handling file paths

// Define the path to the reply email template
const replyTemplatePath = path.join(__dirname, "../public/templates/replyTemplate.html");

// Function to generate the HTML content for a reply email
const replyTemplate = async (message) => {
    // Inject the message into the MJML template and convert it to HTML
    const html = await mjmlUtils.inject(replyTemplatePath, { message });
    return html; // Return the generated HTML
}

// Export the replyTemplate function for use in other parts of the application
module.exports = { replyTemplate };
