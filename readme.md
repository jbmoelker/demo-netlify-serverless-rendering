# Demo Netlify Serverless Rendering

Demo to show serving static HTML pages and **dynamic HTML pages rendered by Netlify functions**.

[Redirects](https://www.netlify.com/docs/redirects/) are configured in [netlify.toml](netlify.toml) to serve dynamic pages using [Netlify functions](https://www.netlify.com/docs/functions/) on pretty URLs:

* [`/`](https://demo-netlify-serverless-rendering.netlify.com/) server simple static HTML page
* [`/echo/*`](https://demo-netlify-serverless-rendering.netlify.com/echo/hello-world) serves dynamic HTML page rendered with simple Netlify function
* [`/express/*`](https://demo-netlify-serverless-rendering.netlify.com/express/hello-world) serves dynamic HTML page rendered with [Express](https://expressjs.com/) in Netlify function

## Development

This project requires [Node.js](http://nodejs.org/) (>= v10) and [npm](https://npmjs.org/) (comes with Node).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`dev` | Starts [Netlify Dev server](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md) on [`http://localhost:8888`](http://localhost:8888).

### Functions

This project uses [Unbundled JavaScript functions setup](https://www.netlify.com/docs/cli/#unbundled-javascript-function-deploys):

```
└─ functions/
   └─ function-name/
      ├─ function-name.js       <- function entry point
      └─ package.json           <- dependencies for this function
```
