const http = require('http');

const hostname = process.env.QOVERY_APPLICATION_LOG_PRINTER_GITHUB_HOSTNAME;
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`);
    setInterval(() => console.log(new Date()), 1 * 1000);
});
