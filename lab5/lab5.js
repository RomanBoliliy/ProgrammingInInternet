// 1 

function invokeAfterDelay(callback, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(callback), delay);
    });
}

function RandomNumber() {
    return Math.floor(Math.random() * 11);
}

invokeAfterDelay(RandomNumber(), 1000).then((response) => console.log(response));

//2

function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(RandomNumber(), delay);
}

Promise.all([produceRandomAfterDelay(3000), produceRandomAfterDelay(3000)]).then(results => {
    const sum = results.reduce((acc, curr) => acc + curr);
    console.log(sum);
})

