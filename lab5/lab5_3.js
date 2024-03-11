//3

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function wait() {
    console.log('Waiting for 1 second...');

    await sleep(1000);
    
    console.log('Done');
}

wait();

