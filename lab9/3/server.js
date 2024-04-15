const PORT = 5500;

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: PORT });

const cryptoCurrencies = [
    { name: 'BTC', rate: 50000 },
    { name: 'ETH', rate: 2000 },
    { name: 'LTC', rate: 150 },
    { name: 'XRP', rate: 1.5 },
    { name: 'ADA', rate: 1.2 }
];

function Randomize(min, max) {
    return Math.random() * (max - min) + min;
}

function update() {
    cryptoCurrencies.forEach(crypto => {
        crypto.rate += Randomize(-10, 10);
    });
    cryptoCurrencies.forEach(crypto => {
       if(crypto.rate<0){crypto.rate*=-1;}
    });
    return cryptoCurrencies;
}

wss.on('connection', function connection(ws) {
    console.log(`client connected on port ${PORT}`);

    let interval;

    function sendRates() {
        const updatedRates = update();
        ws.send(JSON.stringify(updatedRates));
        const randomInterval = Randomize(1000, 20000);
        clearInterval(interval);
        interval = setInterval(sendRates, randomInterval);
    }

    sendRates();

    ws.on('close', function() {
        clearInterval(interval);
        console.log(`client disconnected on port ${PORT}`);
    });
});
