exports.handler = (event, context, callback) => {
    const route = event.path
        .replace(/^\/\.netlify\/functions/, '')
        .replace(/^\/[a-z-]+\//, '')

    const title = route.replace('-', ' ', 'g')
    const body = `
        <h1>"${ title }" back</h1>
    `
    callback(null, { statusCode: 200, body })
}