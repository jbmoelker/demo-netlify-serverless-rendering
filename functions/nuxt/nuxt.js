const { Nuxt } = require('nuxt-start')

const nuxt = new Nuxt({
    rootDir: __dirname,
    dev: false
})

exports.handler = async (event, context) => {
    try {
        await nuxt.ready()
        const { html, error, redirected } = await nuxt.server.renderRoute('/')
        if (error) {
            /* ... */
        }
        if (redirected) {
            /* ... */
        }
        return { 
            statusCode: 200, 
            body: html
        }
    } catch(err) {
        throw Error(err)
    }
}