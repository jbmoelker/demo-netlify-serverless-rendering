const routePattern = `/.netlify/functions/echo/hello-world`

exports.handler = (event, context, callback) => {
    const { path } = event
    const route = event.path
        .replace(/^\/\.netlify\/functions/, '')
        .replace(/^\/[a-z-]+\//, '')

    const title = route.replace('-', ' ', 'g')
    const body = `
        <h1>"${ title }" back</h1>
    `
    callback(null, { statusCode: 200, body })
}