/* Express App */
const express = require("express")
const cors = require("cors")
const compression = require("compression")

/* My express App */
module.exports = function expressApp() {
  const app = express()
  app.use(cors())
  // app.use(compression())

  app.get("/*", function(req, res) {
    res.send(`Express rendered: ${req.params[0]}`);
  })

  return app;
}
