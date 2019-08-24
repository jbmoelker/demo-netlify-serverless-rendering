// for a full working demo check https://express-via-functions.netlify.com/.netlify/functions/serverless-http
const serverless = require("serverless-http");
const expressApp = require("./app");

// Initialize express app
const app = expressApp();

// Export lambda handler
exports.handler = (event, context, callback) => {
    const path = event.path
        .replace(/^\/\.netlify\/functions/, '')
        .replace(/^\/[a-z-]+/, '')

    return serverless(app)({ ...event, path }, context, callback)
}
