// Connected microsites - order matters for routes.
// More specific routes should be declared first.
// Visitor prioritization is intentionally commented out to show it is reserving port 3999

module.exports = [
    {
        directory: '/tb-products',
        path: '/food',
        port: 3002,
        useProxyResolver: true
    },
    {
        directory: '/tb-public',
        path: '/',
        port: 3001
    }
];
