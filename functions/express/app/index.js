const express = require("express")
const cors = require("cors")
const compression = require("compression")
const nunjucks = require('nunjucks')

const renderer = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(`${__dirname}/views`, {
        noCache: true,
        watch: false
    }),
    { autoescape: true }
)

module.exports = function expressApp() {
  const app = express()
  app.use(cors())
  app.use(compression())

  app.get("/*", function(req, res) {
    const html = renderer.render('index.njk', {
      title: req.params[0]
    })
    res.send(html);
  })

  return app;
}
