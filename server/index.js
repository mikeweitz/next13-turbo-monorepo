/*
 * import requires npm i esm, then npm -r esm server.js
 */
import Express from 'express';
import proxy from 'express-http-proxy';
const { createProxyMiddleware } = require('http-proxy-middleware');

import './tracer'; // must come before importing any instrumented module.

import microsites from './sites.config';

const app = Express();
const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     // const { url, baseUrl, port, hostname } = req;
//     // console.log('new request', req);
//     next();
// });

// This is a port from the other version of the reverse proxy that used express-http-proxy
// The purpose was to prefixed requests with basePath UNLESS
// they were api or _next routes
// but I don't think this is necessary with http-proxy-middleware
const proxyResolver = (site) => (path, req) => {
    // ex req url: /food?storeId=9999
    const parts = req.url.split('?');
    const queryString = parts[1] ? '?' + parts[1] : '';

    // default the path to the microsite base + query string
    // let updatedPath = path + queryString;
    let updatedPath = site.path + queryString;

    // check if the request includes to /_next or /api in the route
    if (/\/_next\/|\/api\//.test(parts[0])) {
        console.log('request is to a _next or api');
        updatedPath = parts[0] + queryString;
        // or if it's to web root '/'
    } else if (parts[0] !== '/') {
        console.log('request is to web root / ');
        updatedPath = site.path + parts[0] + queryString;
        // updatedPath = path + parts[0] + queryString;
    }
    console.log('update to:', req.path, updatedPath);
    return updatedPath;
};

app.use(
    '/food',
    createProxyMiddleware({
        target: {
            host: 'localhost',
            port: '3002'
        },
        changeOrigin: false
        // pathRewrite: {
        //     [`^/json_placeholder`]: ''
        // }
        // pathRewrite: proxyResolver({ path: '/food' })
    })
);
app.use(
    '/',
    createProxyMiddleware({
        target: {
            host: 'localhost',
            port: '3001'
        },
        changeOrigin: false
        // pathRewrite: proxyResolver({ path: '/' })
    })
    // proxy(
    //     'localhost',
    //     { port: 3001 }
    //     // {
    //     //     proxyReqPathResolver: (req) => {
    //     //         console.log('request to / on 3000 - proxy to 3001', req.url);
    //     //         return req.url;
    //     //     }
    //     // }
    // )
);

// microsites.forEach((site) => {
//     //     if (site) {
//     //         console.log('prepare:', site, `localhost:${site.port}`);
//     //     }

//     app.use(
//         site.path,
//         proxy(`localhost:${site.port}/${site.path}`, {
//             proxyReqPathResolver: site.useProxyResolver
//                 ? function (req) {
//                       console.log('request on ' + site.path, req.url);
//                       return site.path + req.url;
//                   }
//                 : undefined
//         })
//     );
// });

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
});
