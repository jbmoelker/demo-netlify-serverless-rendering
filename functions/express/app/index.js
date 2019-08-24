const express = require("express")
const cors = require("cors")
const compression = require("compression")

module.exports = function expressApp() {
  const app = express()
  app.use(cors())
  app.use(compression())

  app.get("/*", function(req, res) {
    res.send(`
      <h1>Express rendered: "${req.params[0]} "</h1>
    `);
  })

  return app;
}
