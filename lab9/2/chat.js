const PORT = process.env.PORT || 5500;


const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const CLIENT_PATH = 'client.html';
const clientHTML = fs.readFileSync(CLIENT_PATH);

let clients = [];

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}).end(clientHTML);
});

app.get('/chat', (req, res) => {
    acceptNewClient(req, res);
});

app.post('/chat', (req, res) => {
    broadcastNewMessage(req, res);
});

function acceptNewClient(req, res) {
    clients.push(res);
    req.on('close', () => {
        clients.splice(clients.indexOf(res), 1);
        res.end();
    });
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    });
    res.write('event: chat\ndata: Connected\n\n');
}

async function broadcastNewMessage(req, res) {
    req.setEncoding('utf8');
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        res.writeHead(200).end();
        let message = 'data: ' + body.replace('\n', '\ndata: ');
        let event = `event: chat\n${message}\n\n`;
        clients.forEach(client => client.write(event));
    });
}

const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

