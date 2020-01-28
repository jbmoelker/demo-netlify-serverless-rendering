const fsExtra = require('fs-extra')
const request = require('supertest')

const app = require('../functions/express/app')()

const outputDir = 'dist/express'
const pages = [
    '/Hello Nunjucks',
    '/hello-world'
]

pages.forEach(generateStaticPage)

function generateStaticPage (page) {
    request(app)
        .get(page)
        .then(({ text }) => fsExtra.outputFile(`${outputDir}${page}/index.html`, text))
}