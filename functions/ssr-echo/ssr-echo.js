const functionName = 'ssr-echo'
const baseRoute = process.env.NODE_ENV === 'dev'
    ? `/${functionName}/`
    : `/.netlify/functions/${functionName}/`

exports.handler = (event, context, callback) => {
    const route = event.path.slice(baseRoute.length)
    const title = `${route.replace('-', ' ', 'g')} back `.toUpperCase()
    const body = `
        <h1>${ title }</h1>
    `
    callback(null, { statusCode: 200, body })
}