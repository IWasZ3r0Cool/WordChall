

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 53814;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let filePath = '.';

    // If the request is for the root URL, serve index.html
    if (req.url === '/') {
      filePath = path.join(__dirname, 'index.html');
    } else {
      // Otherwise, try to serve the requested file
      filePath = path.join(__dirname, req.url);
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        // Determine content type based on file extension
        let contentType = 'text/html';
        if (req.url.endsWith('.css')) {
          contentType = 'text/css';
        } else if (req.url.endsWith('.js')) {
          contentType = 'application/javascript';
        } else if (req.url.endsWith('.webp') || req.url.endsWith('.png') || req.url.endsWith('.jpg') || req.url.endsWith('.jpeg') || req.url.endsWith('.gif')) {
          contentType = 'image/webp'; // or the appropriate image type
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  } else {
    res.writeHead(405); // Method Not Allowed
    res.end('Method not allowed');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT}`);
});

