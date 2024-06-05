const appOrigin = process.env.NODE_ENV == "production" ? "https://demoexpressltd.com" : "http://localhost:3000"; //used to determine the origin (base URL) of the application

module.exports = {appOrigin};    