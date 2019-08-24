const functionName = 'ssr-echo'

exports.handler = (event, context, callback) => {
    const { path } = event
    const route = event.path
        .replace('/.netlify/functions', '')
        .replace(`/${functionName}/`, '')

    const title = route.replace('-', ' ', 'g')
    const body = `
        <h1>"${ title }" back</h1>
    `
    callback(null, { statusCode: 200, body })
}