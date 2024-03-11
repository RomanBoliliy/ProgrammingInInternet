//6

function logCall(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var Time = new Date();
            console.log(Time);
            callback();
            resolve(Time);
        }, 1000);
    });
}
  
function callback() {
    console.log('Callback function');
}
  
logCall(callback)
    .then(() => logCall(callback))
    .then(() => logCall(callback))
    .then(() => logCall(callback))
    .catch(error => console.error('Error:', error));

