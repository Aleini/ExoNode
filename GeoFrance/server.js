/*const {createServer} = require('http');

const server = createServer();

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'text/html');  
  response.end('<h1>Hello World</h1>');

  console.log(request.headers);                     
  console.log(response.getHeaders());               
});

server.listen(8080);*/


/*const {createServer} = require('http');
const server = createServer().listen(8080);

server.on('request', (request, response) => {
  if (request.url === '/') {                        // (1)
    response.end('<a href="/hello">clique-moi</a>');
  }
  else if (request.url === '/coucou') {             // (2)
    response.end('<a href="/">coucou !</a>');
  }
});*/


/*const {createServer} = require('http');
const server = createServer().listen(8080);

server.on('request', (request, response) => {
  if (request.url === '/') {                        // (1)
    response.end('<a href="/hello">clique-moi</a>');
  }
  else {
    response.statusCode = 404;                      // (2)
    response.end('<h1>Page introuvable</h1>');      // (3)
  }
});*/

/*const {createServer} = require('http');
const router = require('find-my-way')();                // (1)

router.get('/', (request, response) => {                // (2)
  response.end('<a href="/coucou">clique-moi</a>');
});

router.get('/coucou', (request, response) => {          // (3)
  response.end('<a href="/">retour</a>');
});

const server = createServer().listen(8080)
  .on('request', (req, res) => router.lookup(req, res));*/

/*const {createServer} = require('http');
const router = require('find-my-way')();

router.get('/hello/:word', (req, response, params) => { // (1)
  response.end(`<p>hello ${params.word}</p>`);          // (2)
});

const server = createServer().listen(8080)
  .on('request', (req, res) => router.lookup(req, res));*/

/*  const {createServer} = require('http');
const router = require('find-my-way')();

router.get('/', (request, response) => {          // (1)
  response.end('Bienvenue');
});

router.head('/', (request, response) => {         // (2)
  response.writeHead(200, {                       // (3)
    'X-Jobs': 'https://jobs.humancoders.com'      // (4)
  });
  response.end('Invisible');                      // (5)
});

const server = createServer().listen(8080)
  .on('request', (req, res) => router.lookup(req, res));*/

/*const {createServer} = require('http');
const {createReadStream} = require('fs');
const {join} = require('path');

const server = createServer().listen(8080);

server.on('request', (requet, response) => {
  const filepath = join(__dirname, 'Static', 'doc.pdf'); // (1)
  createReadStream(filepath).pipe(response);            // (2)
});*/

/*const {createServer} = require('http');
const {createReadStream} = require('fs');
const {join} = require('path');
const router = require('find-my-way')();

const staticFiles = (request, response, params) => {
  const filename = join(__dirname, 'Static', params.file);// (2)
  createReadStream(filename).pipe(response);
};

router.get('/files/:file', staticFiles);                 // (1)
router.head('/files/:file', staticFiles);

const server = createServer().listen(8080)
  .on('request', (req, res) => router.lookup(req, res));*/

/*const {createServer} = require('http');
const {join} = require('path');
const send = require('send');
const router = require('find-my-way')();

const staticFiles = (request, response, params) => {
    const pathname = params['*']; // (2)
    const filename = join(__dirname, 'Static', pathname);

    send(request, filename).pipe(response); // (3)
};

router.get('/files/*', staticFiles); // (1)
router.head('/files/*', staticFiles);

const server = createServer().listen(8080)
    .on('request', (req, res) => router.lookup(req, res));*/