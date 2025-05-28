// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
